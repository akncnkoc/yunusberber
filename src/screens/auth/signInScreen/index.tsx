import ArrowRightSvg from "@/assets/svg/ArrowRightSvg";
import BerberButton from "@/components/BerberButton";
import BerberPhoneInput from "@/components/BerberPhoneInput";
import BerberText from "@/components/BerberText";
import { AuthStackParams } from "@/navigation/auth/AuthStack";
import { setSingUpValues, SignUpFormType } from "@/redux/auth/signUpSlice";
import { useAppDispatch } from "@/redux/hooks";
import { colors, padding } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFormik } from "formik";
import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions, Keyboard } from "react-native";
import * as yup from "yup";
import { showMessage, hideMessage } from "react-native-flash-message";

export type SignInScreenParams = NativeStackScreenProps<
  AuthStackParams,
  "SignInScreen"
>;
const SignInScreen: React.FC<SignInScreenParams> = ({ navigation }) => {
  const dimension = Dimensions.get("window");
  const dispatch = useAppDispatch();
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const onChangeTextPhone = (value: string) => {
    if (!value) {
      return;
    }
    setMobileNumber(value);
    signUpForm.setFieldValue("phone", value);
  };

  const signUpForm = useFormik<SignUpFormType>({
    initialValues: {
      phone: "",
      isConfirmed: false,
    },
    onSubmit: (values) => {
      Keyboard.dismiss();
      if (!mobileNumber) {
        return;
      }
      dispatch(setSingUpValues(values));

      navigation.navigate("CodeScreen");
    },
    validationSchema: yup.object({
      phone: yup.string().required("Telefon alanı boş bırakılamaz"),
    }),
  });
  const checIsValidButton = () => {
    if (!isValid) {
      return true;
    }
    if (!mobileNumber.startsWith("+905")) {
      return true;
    }
    return false;
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/s5.jpg")}
        style={{ height: dimension.height, width: dimension.width }}
      />
      <View
        style={[
          styles.modal,
          {
            height: dimension.height * 0.2,
            width: dimension.width * 0.9,
            top: dimension.height / 2,
            left: dimension.width / 2,
            transform: [
              {
                translateX: -((dimension.width * 0.9) / 2),
              },
              {
                translateY: -((dimension.height * 0.2) / 2),
              },
            ],
          },
        ]}
      >
        <BerberText style={styles.floatingText}>Hoş Geldin</BerberText>
        <BerberText style={styles.floatingTextTwo}>Giriş Yap </BerberText>
        <BerberPhoneInput
          isValid={setIsValid}
          onChangeText={(value) => onChangeTextPhone(value)}
        />
        <View style={styles.buttonContainer}>
          <BerberButton
            style={styles.button}
            rightIcon={<ArrowRightSvg />}
            onPress={signUpForm.handleSubmit}
            disabled={checIsValidButton()}
          >
            <BerberText style={styles.buttonTextStyle}>Devam</BerberText>
          </BerberButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    position: "absolute",
    backgroundColor: colors.white,
    borderRadius: scaledWidth(20),
    padding: padding[8],
  },
  button: {
    backgroundColor: colors.button,
    height: scaledHeight(56),
    justifyContent: "center",
    paddingHorizontal: padding[10],
    borderBottomRightRadius: scaledWidth(20),
    borderBottomLeftRadius: scaledWidth(28),
    borderTopLeftRadius: scaledWidth(28),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontWeight: "700",
    color: colors.white,
    fontSize: scaledWidth(14),
  },
  floatingText: {
    top: scaledHeight(-120),
    left: 0,
    position: "absolute",
    fontSize: scaledWidth(54),
    fontWeight: "600",
    color: colors.white,
    width: scaledWidth(275),
  },
  floatingTextTwo: {
    top: scaledHeight(-50),
    left: 0,
    position: "absolute",
    fontSize: scaledWidth(24),
    fontWeight: "800",
    color: colors.white,
    width: scaledWidth(275),
  },
  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default SignInScreen;
