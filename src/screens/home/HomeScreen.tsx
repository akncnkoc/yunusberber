import React, { useState } from "react";
import IconSvgBottomSearch from "@/assets/svg/IconSvgBottomSearch";
import IconSvgPersonal from "@/assets/svg/IconSvgPersonal";
import BerberText from "@/components/BerberText";
import { HomeStackParams } from "@/navigation/home/HomeStack";
import PersonalSvg from "@/assets/svg/personal.svg";
import CampaignSvg from "@/assets/svg/campaign.svg";
import CameraSvg from "@/assets/svg/cameraSvg.svg";
import MeetingSvg from "@/assets/svg/meetingSvg.svg";
import ModelSvg from "@/assets/svg/model.svg";
import PriceListSvg from "@/assets/svg/pricelist.svg";
import SummarySvg from "@/assets/svg/summary.svg";
import ContactSvg from "@/assets/svg/phone.svg";
import { colors, padding } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const HomeScreen: React.FC<HomeStackParams> = ({ navigation }) => {
  const [selectState, setSelectState] = useState<number>();
  const data = [
    {
      name: "Personel",
      svgName: <PersonalSvg />,
      page: "PersonScreen",
    },
    {
      name: "Kampanyalar/Bildirimler",
      svgName: <CampaignSvg />,
      page: "CampaignScreen",
    },
    {
      name: "Fotoğraf Ekle",
      svgName: <CameraSvg />,
      page: "PhotoScreen",
    },
    {
      name: "Randevu Al",
      svgName: <MeetingSvg />,
      page: "MeetingStack",
    },
    {
      name: "Modeller",
      svgName: <ModelSvg />,
      page: "ModelScreen",
    },
    {
      name: "Fiyat Listesi",
      svgName: <PriceListSvg />,
      page: "PriceScreen",
    },
    {
      name: "Randevularınız",
      svgName: <SummarySvg />,
      page: "SummaryScreen",
    },
    {
      name: "İletişim",
      svgName: <ContactSvg />,
      page: "ContactScreen",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          backgroundColor: colors.mainColor,
          height: scaledHeight(200),
          borderRadius: scaledWidth(20),
          marginTop: scaledHeight(5),
        }}
      >
        <View>
          <Image
            source={require("@/assets/images/sliderPhoto.jpg")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "stretch",
              borderRadius: scaledHeight(10),
            }}
          />
        </View>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={styles.flatList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.page)}
              onPressIn={() => setSelectState(index)}
              style={[styles.viewBox]}
            >
              {item.svgName}
              <BerberText style={[styles.nameText]}>{item.name}</BerberText>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCFDFF",
  },
  logo: {
    height: scaledHeight(200),
    width: scaledWidth(20),
    top: scaledHeight(50),
    marginBottom: scaledHeight(60),
  },
  viewBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: scaledWidth(10),
    width: scaledWidth(164),
    height: scaledHeight(110),
    margin: scaledWidth(5),
    padding: padding[4],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  flatList: {
    marginTop: scaledHeight(10),
    flexDirection: "column",
  },
  nameText: {
    fontSize: scaledHeight(14),
    fontWeight: "bold",
    paddingTop: scaledHeight(20),
  },
});
export default HomeScreen;
