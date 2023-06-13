import BerberText from "@/components/BerberText";
import { HomeStackParams } from "@/navigation/home/HomeStack";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Modal from "react-native-modal";
import SummarySvg from "@/assets/svg/summary.svg";
import PersonalSvg from "@/assets/svg/personal.svg";
import MoneySvg from "@/assets/svg/money.svg";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { colors } from "@/theme";
import IconSvgClose from "@/assets/svg/IconSvgClose";
import { ScrollView } from "react-native-gesture-handler";
import IconSvgWalkerCalendar from "@/assets/svg/IconSvgWalkerCalendar";
import IconSvgWalkerTime from "@/assets/svg/IconSvgWalkerTime";

const MeetingData = [
  {
    id: 1,
    date: "20.05.2023",
    time: "20.00",
    barber: "Mahmut Tuncer",
    price: "100",
    services: [
      {
        id: 1,
        name: "Saç Kesimi",
      },
      {
        id: 2,
        name: "Sakal Kesimi",
      },
      {
        id: 3,
        name: "Saç Yıkama",
      },
    ],
  },
  {
    id: 2,
    date: "20.05.2023",
    time: "20.00",
    barber: "Ferdi Tayfur",
    price: "100",
    services: [
      {
        id: 1,
        name: "Saç Kesimi",
      },
      {
        id: 2,
        name: "Sakal Kesimi",
      },
      {
        id: 3,
        name: "Saç Yıkama",
      },
    ],
  },

  {
    id: 3,
    date: "20.05.2023",
    time: "20.00",
    barber: "Orhan Gencebay",
    price: "100",
    services: [
      {
        id: 1,
        name: "Saç Kesimi",
      },
      {
        id: 2,
        name: "Sakal Kesimi",
      },
      {
        id: 3,
        name: "Saç Yıkama",
      },
    ],
  },
];

type SummaryScreenParams = NativeStackScreenProps<
  HomeStackParams,
  "SummaryScreen"
>;
const SummaryScreen: React.FC<SummaryScreenParams> = () => {
  const [isModalVisible, setisModalVisible] = useState<boolean>(false);
  const [refreshStatus, setRefreshStatus] = useState<boolean>(false);
  const [idMeeting, setIdMeeting] = useState<number>();
  const onRefresh = () => {};
  const OpenModal = (itemId?: number) => {
    setIdMeeting(itemId);
    setisModalVisible(!isModalVisible);
  };
  return (
    <FlatList
      ListEmptyComponent={() => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <BerberText>Daha Önce Randevunuz Bulunmamaktadır.</BerberText>
        </View>
      )}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshStatus} />
      }
      contentContainerStyle={{
        flex: 1,
        padding: scaledHeight(20),
      }}
      data={MeetingData}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => OpenModal(item.id)}
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
                width: "94%",
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
                    fontSize: scaledHeight(28),
                    fontWeight: "500",
                    paddingTop: scaledHeight(80),
                    paddingBottom: scaledHeight(40),
                    paddingHorizontal: scaledWidth(40),
                  }}
                >
                  {idMeeting}'nci Randevunuz
                </BerberText>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonalSvg />
                  <BerberText
                    style={{
                      fontSize: scaledHeight(18),
                    }}
                  >
                    Berberiniz:{"  "}
                  </BerberText>
                  <BerberText
                    style={{
                      fontSize: scaledHeight(18),
                      fontWeight: "300",
                    }}
                  >
                    {item.barber}
                  </BerberText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconSvgWalkerCalendar />
                  <BerberText
                    style={{
                      fontSize: scaledHeight(18),
                      paddingLeft: scaledWidth(4),
                    }}
                  >
                    Randevu Tarihi:{" "}
                  </BerberText>
                  <BerberText style={{ fontSize: scaledHeight(18) }}>
                    {item.date}
                  </BerberText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconSvgWalkerTime />
                  <BerberText
                    style={{
                      fontSize: scaledHeight(18),
                      paddingLeft: scaledWidth(4),
                    }}
                  >
                    Randevu Saati:{" "}
                  </BerberText>
                  <BerberText style={{ fontSize: scaledHeight(18) }}>
                    {item.time}
                  </BerberText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MoneySvg />
                  <BerberText
                    style={{
                      fontSize: scaledHeight(18),
                      paddingLeft: scaledWidth(4),
                    }}
                  >
                    Fiyat:{" "}
                  </BerberText>
                  <BerberText style={{ fontSize: scaledHeight(18) }}>
                    {item.price} TL
                  </BerberText>
                </View>
                <View
                  style={{
                    paddingTop: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BerberText
                    style={{
                      fontSize: scaledHeight(22),
                      paddingLeft: scaledWidth(4),
                      textDecorationLine: "underline",
                      fontWeight: "500",
                    }}
                  >
                    Aldığınız Hizmetler
                  </BerberText>
                  {item.services.map((item, index) => (
                    <BerberText
                      key={index}
                      style={{ fontSize: scaledHeight(18) }}
                    >
                      {item.name}
                    </BerberText>
                  ))}
                </View>

                <TouchableOpacity
                  onPress={() => OpenModal()}
                  style={{
                    position: "absolute",
                    right: scaledHeight(10),
                  }}
                >
                  <IconSvgClose />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>
          <View style={{ flex: 1 }}>
            <View>
              <BerberText
                style={{ fontSize: scaledHeight(18), fontWeight: "bold" }}
              >
                {item.id}'nci Randevunuz
              </BerberText>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <BerberText style={{ fontWeight: "300", paddingRight: 20 }}>
                {item.date}
              </BerberText>
              <BerberText>{item.barber}</BerberText>
            </View>
          </View>
          <View style={{ flex: 0.2 }}>
            <SummarySvg />
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
export default SummaryScreen;
