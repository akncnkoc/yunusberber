import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./auth/AuthStack";
import OnBoardingStack from "./onBoarding/OnBoardingStack";
import HomeStack from "./home/HomeStack";
import AppStack from "./app/AppStack";
import OnBoardingScreen from "@/screens/onBoarding";
import SplashScreen from "@/screens/SplashScreen";

export type MainStackNavigatorParams = {
  AuthStack: undefined;
  SplashScreen: undefined;
  OnBoardingScreen: undefined;
  HomeStack: undefined;
  AppStack: undefined;
};

const MainStackNavigator =
  createNativeStackNavigator<MainStackNavigatorParams>();

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <MainStackNavigator.Screen name="SplashScreen" component={SplashScreen} />
      <MainStackNavigator.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
      />
      <MainStackNavigator.Screen name="AuthStack" component={AuthStack} />
      <MainStackNavigator.Screen name="AppStack" component={AppStack} />
    </MainStackNavigator.Navigator>
  );
};
export default MainStack;
