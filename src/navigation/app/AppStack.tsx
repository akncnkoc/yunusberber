import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "@/screens/home/HomeScreen";
import PersonScreen from "@/screens/home/PersonScreen";
import CampaignScreen from "@/screens/home/CampaignScreen";
import PhotoScreen from "@/screens/home/PhotoScreen";
import PriceScreen from "@/screens/home/PriceScreen";
import ModelScreen from "@/screens/home/ModelScreen";
import MeetingStack from "../meeting/MeetingStack";
import MeetingSvg from "@/assets/svg/meetingSvg.svg";
import IconSvgBottomHome from "@/assets/svg/IconSvgBottomHome";
import PersonalSvg from "@/assets/svg/personal.svg";
import CampaignSvg from "@/assets/svg/campaign.svg";
import CameraSvg from "@/assets/svg/cameraSvg.svg";
import ModelSvg from "@/assets/svg/model.svg";
import PriceListSvg from "@/assets/svg/pricelist.svg";
import SummarySvg from "@/assets/svg/summary.svg";
import ContactSvg from "@/assets/svg/phone.svg";
import ContactScreen from "@/screens/home/ContactScreen";
import SummaryScreen from "@/screens/home/SummaryScreen";

export type AppStackNavigatorParams = {
  HomeScreen: undefined;
  MeetingStack: undefined;
  CampaignScreen: undefined;
  PhotoScreen: undefined;
  ModelScreen: undefined;
  PriceScreen: undefined;
  PersonScreen: undefined;
  AuthStack: undefined;
  ContactScreen: undefined;
  SummaryScreen: undefined;
};

const AppStackNavigator = createDrawerNavigator<AppStackNavigatorParams>();

const AppStack = () => {
  return (
    <AppStackNavigator.Navigator initialRouteName="HomeScreen">
      <AppStackNavigator.Screen
        name="HomeScreen"
        options={{
          headerShown: true,
          title: "Ana Sayfa",
          drawerIcon: () => <IconSvgBottomHome />,
        }}
        component={HomeScreen}
      />
      <AppStackNavigator.Screen
        name="MeetingStack"
        options={{
          headerShown: false,
          title: "Randevu Al",
          drawerIcon: () => <MeetingSvg />,
        }}
        component={MeetingStack}
      />
      <AppStackNavigator.Screen
        name="PersonScreen"
        options={{
          headerShown: true,
          title: "Personel",
          drawerIcon: () => <PersonalSvg />,
        }}
        component={PersonScreen}
      />
      <AppStackNavigator.Screen
        name="CampaignScreen"
        options={{
          headerShown: true,
          title: "Kampanyalar/ Bildirimler",
          drawerIcon: () => <CampaignSvg />,
        }}
        component={CampaignScreen}
      />
      <AppStackNavigator.Screen
        name="PhotoScreen"
        options={{
          headerShown: true,
          title: "Fotoğraf Ekle",
          drawerIcon: () => <CameraSvg />,
        }}
        component={PhotoScreen}
      />

      <AppStackNavigator.Screen
        name="PriceScreen"
        options={{
          headerShown: true,
          title: "Fiyat Listesi",
          drawerIcon: () => <PriceListSvg />,
        }}
        component={PriceScreen}
      />
      <AppStackNavigator.Screen
        name="ModelScreen"
        options={{
          headerShown: true,
          title: "Modeller",
          drawerIcon: () => <ModelSvg />,
        }}
        component={ModelScreen}
      />
      <AppStackNavigator.Screen
        name="SummaryScreen"
        options={{
          headerShown: true,
          title: "Randevularınız",
          drawerIcon: () => <SummarySvg />,
        }}
        component={SummaryScreen}
      />
      <AppStackNavigator.Screen
        name="ContactScreen"
        options={{
          headerShown: true,
          title: "İletişim",
          drawerIcon: () => <ContactSvg />,
        }}
        component={ContactScreen}
      />
    </AppStackNavigator.Navigator>
  );
};
export default AppStack;
