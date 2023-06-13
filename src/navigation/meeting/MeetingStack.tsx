import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseGender from "@/screens/meetingScreens/ChooseGender";
import ChooseService, {
  ServiceType,
} from "@/screens/meetingScreens/ChooseService";
import ChoosePersonal from "@/screens/meetingScreens/ChoosePersonal";
import ChooseDate from "@/screens/meetingScreens/ChooseDate";
import MeetingFinish from "@/screens/meetingScreens/MeetingFinish";
import {
  Header,
  HeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "@/theme";
import { scaledHeight } from "@/utils/responsive";

type MeetingDataType = {
  gender?: string;
  services?: number[];
  personal?: number;
  date?: Date;
};

export type MeetingStackParams = {
  ChooseGender: undefined;
  ChooseService: {
    meetingData: MeetingDataType;
  };
  ChoosePersonal: {
    meetingData: MeetingDataType;
  };
  ChooseDate: {
    services: Array<ServiceType>;
  };
  MeetingFinish: undefined;
  // MeetingScreens: MeetingScreensStackParams;
};

const MeetingScreenStack = createNativeStackNavigator<MeetingStackParams>();

const MeetingStack: React.FC<MeetingStackParams> = ({ route, navigation }) => {
  return (
    <MeetingScreenStack.Navigator
      screenOptions={{
        headerBackTitle: "Geri",
        headerBackTitleVisible: true,
        headerBackButtonMenuEnabled: true,
      }}
      initialRouteName="ChooseGender"
    >
      <MeetingScreenStack.Screen
        name="ChooseGender"
        options={{
          headerShown: true,
          title: "Cinsiyet Seçimi Yapın",
        }}
        component={ChooseGender}
      />
      <MeetingScreenStack.Screen
        name="ChooseService"
        options={{
          headerShown: true,
          title: "Servis Seçin",
          headerLeft: (props: HeaderBackButtonProps) => (
            <View
              onTouchStart={() => navigation.navigate("ChooseGender")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <HeaderBackButton />
              <Text
                style={{
                  color: colors.mainColor,
                  fontSize: scaledHeight(20),
                  marginRight: scaledHeight(20),
                }}
              >
                Geri
              </Text>
            </View>
          ),
        }}
        component={ChooseService}
      />
      <MeetingScreenStack.Screen
        name="ChoosePersonal"
        options={{
          headerShown: true,
          title: "Personel Seç",
          headerLeft: (props: HeaderBackButtonProps) => (
            <View
              onTouchStart={() => navigation.navigate("ChooseService")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <HeaderBackButton />
              <Text
                style={{
                  color: colors.mainColor,
                  fontSize: scaledHeight(20),
                  marginRight: scaledHeight(20),
                }}
              >
                Geri
              </Text>
            </View>
          ),
        }}
        component={ChoosePersonal}
      />
      <MeetingScreenStack.Screen
        name="ChooseDate"
        options={{
          headerShown: true,
          title: "Randevu Tarihi Seç",
          headerLeft: (props: HeaderBackButtonProps) => (
            <View
              onTouchStart={() => navigation.navigate("ChoosePersonal")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <HeaderBackButton />
              <Text
                style={{
                  color: colors.mainColor,
                  fontSize: scaledHeight(20),
                  marginRight: scaledHeight(20),
                }}
              >
                Geri
              </Text>
            </View>
          ),
        }}
        component={ChooseDate}
      />
      <MeetingScreenStack.Screen
        name="MeetingFinish"
        options={{
          headerShown: true,
          title: "Randevu Özeti",
          headerLeft: (props: HeaderBackButtonProps) => (
            <View
              onTouchStart={() => navigation.navigate("ChooseDate")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <HeaderBackButton />
              <Text
                style={{
                  color: colors.mainColor,
                  fontSize: scaledHeight(20),
                  marginRight: scaledHeight(20),
                }}
              >
                Geri
              </Text>
            </View>
          ),
        }}
        component={MeetingFinish}
      />
    </MeetingScreenStack.Navigator>
  );
};

export default MeetingStack;
