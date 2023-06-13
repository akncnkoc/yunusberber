import React from "react";
import CampaignScreen from "@/screens/home/CampaignScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import MeetingScreen from "@/screens/home/MeetingScreen";
import ModelScreen from "@/screens/home/ModelScreen";
import PersonScreen from "@/screens/home/PersonScreen";
import PhotoScreen from "@/screens/home/PhotoScreen";
import PriceScreen from "@/screens/home/PriceScreen";
import ProfileScreen from "@/screens/home/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SummaryScreen from "@/screens/home/SummaryScreen";
import ContactScreen from "@/screens/home/ContactScreen";

export type HomeStackParams = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  PersonScreen: undefined;
  CampaignScreen: undefined;
  ModelScreen: undefined;
  PriceScreen: undefined;
  PhotoScreen: undefined;
  MeetingScreen: undefined;
  SummaryScreen: undefined;
  ContactScreen: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParams>();

const HomeStack: React.FC = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <HomeStackNavigator.Screen name="PersonScreen" component={PersonScreen} />
      <HomeStackNavigator.Screen
        name="CampaignScreen"
        component={CampaignScreen}
      />
      <HomeStackNavigator.Screen name="ModelScreen" component={ModelScreen} />
      <HomeStackNavigator.Screen name="PriceScreen" component={PriceScreen} />
      <HomeStackNavigator.Screen name="PhotoScreen" component={PhotoScreen} />
      <HomeStackNavigator.Screen
        name="SummaryScreen"
        component={SummaryScreen}
      />
      <HomeStackNavigator.Screen
        name="ContactScreen"
        component={ContactScreen}
      />
      <HomeStackNavigator.Screen
        name="MeetingScreen"
        component={MeetingScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
