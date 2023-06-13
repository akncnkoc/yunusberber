import BerberText from "@/components/BerberText";
import { HomeStackParams } from "@/navigation/home/HomeStack";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Modal from "react-native-modal";

import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import CampaignSvg from "@/assets/svg/campaign.svg";
import { colors } from "@/theme";
import IconSvgClose from "@/assets/svg/IconSvgClose";
import { ScrollView } from "react-native-gesture-handler";

const NotificationData = [
  {
    id: 1,
    title: "Saç Traşı Bayram Kampanyası",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryß standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Saç Traşı Bayram Kampanyası",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryß standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },

  {
    id: 3,
    title: "Saç Traşı Bayram Kampanyası",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryß standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

type CampaignScreenParams = NativeStackScreenProps<
  HomeStackParams,
  "CampaignScreen"
>;
const CampaignScreen: React.FC<CampaignScreenParams> = () => {
  const [isModalVisible, setisModalVisible] = useState<boolean>(false);
  const [refreshStatus, setRefreshStatus] = useState<boolean>(false);
  const onRefresh = () => {};
  const OpenModal = () => {
    setisModalVisible(!isModalVisible);
  };
  return (
    <FlatList
      ListEmptyComponent={() => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <BerberText>Sizin için geçerli kampanya bulunmamaktadır.</BerberText>
        </View>
      )}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshStatus} />
      }
      contentContainerStyle={{
        flex: 1,
        padding: scaledHeight(10),
      }}
      data={NotificationData}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={OpenModal}
          activeOpacity={0.75}
          key={index.toString()}
          style={{
            backgroundColor: "white",
            paddingHorizontal: scaledWidth(20),
            paddingVertical: scaledHeight(20),
            marginTop: scaledHeight(20),
            flexDirection: "row",
            justifyContent: "space-between",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            borderRadius: scaledHeight(25),
          }}
        >
          <Modal isVisible={isModalVisible}>
            <View
              style={{
                position: "relative",
                backgroundColor: colors.white,
                alignSelf: "center",
                width: "90%",
                height: "80%",
                borderRadius: scaledHeight(60),
                alignItems: "center",
                justifyContent: "center",
                padding: scaledHeight(10),
              }}
            >
              <ScrollView>
                <BerberText
                  style={{
                    fontSize: scaledHeight(22),
                    fontWeight: "500",
                    paddingTop: scaledHeight(80),
                    paddingHorizontal: scaledWidth(40),
                  }}
                >
                  {" "}
                  {item.title}{" "}
                </BerberText>
                <BerberText
                  style={{
                    fontSize: scaledHeight(18),
                    fontWeight: "300",
                    padding: 10,
                  }}
                >
                  {item.description}
                </BerberText>
                <TouchableOpacity
                  onPress={OpenModal}
                  style={{
                    position: "absolute",
                    top: scaledHeight(10),
                    right: scaledHeight(10),
                  }}
                >
                  <IconSvgClose />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>
          <View></View>
          <View style={{ flex: 1 }}>
            <BerberText
              style={{ fontSize: scaledHeight(18), fontWeight: "bold" }}
            >
              {item.title}
            </BerberText>
            <BerberText
              style={{ paddingTop: scaledHeight(5), fontWeight: "300" }}
            >
              {item.description.slice(0, 100) + "..."}
            </BerberText>
          </View>
          <View style={{ flex: 0.2 }}>
            <CampaignSvg />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});
export default CampaignScreen;
