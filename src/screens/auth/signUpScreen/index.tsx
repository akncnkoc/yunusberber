import { AuthStackParams } from "@/navigation/auth/AuthStack";
import { colors, padding } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import { useFormik } from "formik";
import { setSingUpValues, SignUpFormType } from "@/redux/auth/signUpSlice";
import { useAppDispatch } from "@/redux/hooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BerberText from "@/components/BerberText";
import BerberButton from "@/components/BerberButton";
import ArrowRightSvg from "@/assets/svg/ArrowRightSvg";
import BerberInput from "@/components/BerberInput";
import BerberPhoneInput from "@/components/BerberPhoneInput";
type SignUpScreenParams = NativeStackScreenProps<
  AuthStackParams,
  "SignUpScreen"
>;

const SignUpScreen: React.FC<SignUpScreenParams> = ({ navigation }) => {
  const dimension = Dimensions.get("window");
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const checIsValidButton = () => {
    if (!isValid) {
      return true;
    }
    if (!mobileNumber.startsWith("+905")) {
      return true;
    }
    return false;
  };
  const signUpForm = useFormik<SignUpFormType>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
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
      name: yup
        .string()
        .matches(/^[a-zA-Z]*$/, "Sadece harf'lerden oluşmalı")
        .min(2, "En az 2 Harften Oluşmalı")
        .max(30, "En fazla 30 harften oluşmalı")
        .required("İsim alanı boş bırakılamaz"),
      surname: yup
        .string()
        .matches(/^[a-zA-Z]*$/, "Sadece harf'lerden oluşmalı")
        .min(2, "En az 2 Harften Oluşmalı")
        .max(30, "En fazla 30 harften oluşmalı")
        .required("Soyisim alanı boş bırakılamaz"),
      email: yup
        .string()
        .required("email alanı boş bırakılamaz")
        .email("Geçerli bir mail adresi girin"),
      phone: yup.string().required("Telefon alanı boş bırakılamaz"),
    }),
  });
  const onChangeTextPhone = (value: string) => {
    if (!value) {
      return;
    }
    setMobileNumber(value);
    signUpForm.setFieldValue("phone", value);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/s5.jpg")}
        style={{ height: dimension.height, width: dimension.width }}
      />
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        extraScrollHeight={scaledHeight(30)}
        extraHeight={scaledHeight(15)}
        showsVerticalScrollIndicator={false}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
        keyboardShouldPersistTaps="handled"
        style={[
          styles.modal,
          {
            // height: dimension.height * 0.6,
            width: dimension.width * 0.8,
            top: dimension.height / 2,
            left: dimension.width / 2,
            transform: [
              {
                translateX: -((dimension.width * 0.8) / 2),
              },
              {
                translateY: -((dimension.height * 0.7) / 2),
              },
            ],
          },
        ]}
      >
        <ScrollView bounces={false}>
          <View style={styles.viewTwo}>
            <View>
              <BerberText style={styles.floatingText}>Kayıt Ol</BerberText>
              <BerberInput
                onChangeText={signUpForm.handleChange("name")}
                onBlur={signUpForm.handleBlur("name")}
                value={signUpForm.values.name}
                containerStyle={styles.input}
                placeholder="İsim"
                label={<BerberText style={styles.inputLabel}>İsim</BerberText>}
                error={
                  signUpForm.touched.name &&
                  signUpForm.errors.name &&
                  signUpForm.errors.name
                }
              />
              <BerberInput
                onChangeText={signUpForm.handleChange("surname")}
                onBlur={signUpForm.handleBlur("surname")}
                value={signUpForm.values.surname}
                containerStyle={styles.input}
                placeholder="Soyisim"
                label={
                  <BerberText style={styles.inputLabel}>Soyisim</BerberText>
                }
                error={
                  signUpForm.touched.surname &&
                  signUpForm.errors.surname &&
                  signUpForm.errors.surname
                }
              />
              <BerberInput
                onChangeText={signUpForm.handleChange("email")}
                onBlur={signUpForm.handleBlur("email")}
                value={signUpForm.values.email}
                containerStyle={styles.input}
                placeholder="email@adress.com"
                autoCapitalize={"none"}
                label={<BerberText style={styles.inputLabel}>Email</BerberText>}
                error={
                  signUpForm.touched.email &&
                  signUpForm.errors.email &&
                  signUpForm.errors.email
                }
              />
              <BerberPhoneInput
                title="Telefon"
                isValid={setIsValid}
                onChangeText={(value) => onChangeTextPhone(value)}
              />
            </View>
          </View>
          <View style={styles.logInTextView}>
            <BerberText style={styles.loginText}>
              Zaten bir hesabın mı var?
            </BerberText>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => navigation.replace("SignInScreen")}
            >
              <BerberText style={styles.loginLinkText}>Giriş yap</BerberText>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <BerberButton
              //disabled={Object.keys(signUpForm.errors).length !== 0}
              style={styles.button}
              rightIcon={<ArrowRightSvg />}
              onPress={signUpForm.handleSubmit}
              activeOpacity={0.75}
              disabled={checIsValidButton()}
            >
              <BerberText style={styles.buttonTextStyle}>Devam</BerberText>
            </BerberButton>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray13,
  },
  modal: {
    position: "absolute",
    padding: scaledHeight(20),
    paddingRight: scaledWidth(20),
    paddingLeft: scaledWidth(20),
    backgroundColor: colors.white,
    borderRadius: scaledWidth(20),
  },
  floatingText: {
    fontSize: scaledWidth(42),
    color: colors.black,
    marginBottom: 40,
    fontWeight: "bold",
  },
  input: {
    marginBottom: scaledHeight(24),
  },
  inputLabel: {
    color: colors.black,
    fontSize: scaledHeight(16),
  },
  inputSmall: {
    fontSize: scaledWidth(12),
    paddingRight: scaledWidth(52),
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#0081C9",
    height: scaledHeight(56),
    justifyContent: "center",
    paddingHorizontal: padding[10],
    borderBottomRightRadius: scaledWidth(20),
    borderBottomLeftRadius: scaledWidth(20),
    borderTopLeftRadius: scaledWidth(20),
    borderTopRightRadius: scaledWidth(20),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: colors.white,
    fontSize: scaledWidth(20),
    fontWeight: "bold",
  },
  viewTwo: {
    position: "relative",
    flex: 1,
  },
  loginText: {
    fontSize: scaledWidth(14),
    color: colors.black,
    marginRight: scaledWidth(4),
  },
  loginLinkText: {
    fontSize: scaledWidth(14),
    color: "#0081C9",
  },
  logInTextView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scaledHeight(20),
    paddingBottom: scaledHeight(10),
  },
});
export default SignUpScreen;
