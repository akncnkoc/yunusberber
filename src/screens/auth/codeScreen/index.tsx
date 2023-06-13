import ArrowRightSvg from "@/assets/svg/ArrowRightSvg";
import BerberButton from "@/components/BerberButton";
import BerberCodeInput from "@/components/BerberCodeInput";
import BerberText from "@/components/BerberText";
import { AppStackNavigatorParams } from "@/navigation/app/AppStack";
import { AuthStackParams } from "@/navigation/auth/AuthStack";
import { useAppSelector } from "@/redux/hooks";
import { colors, padding } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { showMessage } from "react-native-flash-message";

type CodeScreenParams = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParams, "CodeScreen">,
  NativeStackScreenProps<AppStackNavigatorParams>
>;

const CodeScreen: React.FC<CodeScreenParams> = ({ navigation }) => {
  const dimension = Dimensions.get("window");
  const signUpSelector = useAppSelector((state) => state.signUpSlice);

  const CheckCode = () => {
    showMessage({
      message: "Başarıyla giriş yapıldı. Yönlendiriliyorsunuz...",
      description: "aaaa",
      type: "success",
      position: "bottom",
    });

    setTimeout(() => {
      navigation.navigate("AppStack");
    }, 500);
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
            height: dimension.height * 0.5,
            width: dimension.width * 0.9,
            top: dimension.height / 2,
            left: dimension.width / 2,
            transform: [
              {
                translateX: -((dimension.width * 0.9) / 2),
              },
              {
                translateY: -((dimension.height * 0.5) / 2),
              },
            ],
          },
        ]}
      >
        <BerberText style={styles.textBold}>
          Cep telefonunuza gelen kodu giriniz
        </BerberText>
        <BerberText style={styles.textFirst}>
          Lütfen mesajlarınızı kontrol edin ve
        </BerberText>
        <BerberText style={styles.textFirst}>
          <BerberText style={styles.phoneText}>
            {signUpSelector.phone}
          </BerberText>{" "}
          numarasına gönderdiğimiz kodu girin.
        </BerberText>
        <View style={styles.codeInput}>
          <BerberCodeInput
            containerStyle={{ width: scaledWidth(26) }}
            onComplete={() => {}}
          />
        </View>
        <BerberText style={styles.textTwo}>
          Kodun gelmesi zaman alabilir, eğer hiç kod almadıysanız lütfen
          <TouchableOpacity>
            <BerberText style={styles.textButton}>
              {" "}
              Tekrar Kod Gönder{" "}
            </BerberText>
          </TouchableOpacity>
          ’e basın.
        </BerberText>
        <View style={styles.buttonContainer}>
          <BerberButton
            style={styles.button}
            rightIcon={<ArrowRightSvg />}
            onPress={CheckCode}
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
    backgroundColor: "black",
  },
  modal: {
    position: "absolute",
    backgroundColor: colors.white,
    borderRadius: scaledWidth(20),
    padding: padding[2],
  },
  floatingText: {
    top: scaledHeight(-100),
    left: 0,
    position: "absolute",
    fontSize: scaledWidth(54),
    color: colors.white,
  },
  phoneText: {
    fontWeight: "700",
    color: "#0081C9",
  },
  codeInput: {
    flex: 1,
    paddingHorizontal: scaledWidth(18),
  },
  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: "#0081C9",
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
    fontWeight: "800",
    color: colors.white,
    fontSize: scaledWidth(14),
  },
  textBold: {
    fontSize: scaledWidth(18),
    fontWeight: "800",
    marginTop: scaledHeight(24),
    color: colors.black,
    marginBottom: scaledHeight(20),
    marginLeft: scaledWidth(10),
  },
  textFirst: {
    fontSize: scaledWidth(14),
    color: "#4D4D4D",
    textAlign: "center",
  },
  textTwo: {
    fontSize: scaledWidth(14),
    color: "#5C5C5C",
    textAlign: "center",
    marginBottom: scaledHeight(90),
  },
  textButton: {
    fontSize: scaledWidth(14),
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    color: "#0081C9",
  },
});
export default CodeScreen;
