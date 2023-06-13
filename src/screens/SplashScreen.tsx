import React, { useEffect, useRef } from "react";
import { Image, View } from "react-native";
import Lottie from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  const splashRef = useRef<Lottie>(null);

  useEffect(() => {
    splashRef.current?.play();
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoardingScreen");
    }, 300);
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Lottie
        ref={splashRef}
        source={require("@/assets/animations/splash.json")}
      />
    </View>
  );
};

export default SplashScreen;
