import BerberText from "@/components/BerberText";
import { HomeStackParams } from "@/navigation/home/HomeStack";
import { colors } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

type ContactScreenParams = NativeStackScreenProps<
  HomeStackParams,
  "ContactScreen"
>;
const ContactScreen: React.FC<ContactScreenParams> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Image
          style={styles.image}
          source={require("@/assets/images/logo1.png")}
        />
        <View style={styles.headers}>
          <BerberText style={styles.header}>Yunus AKAR </BerberText>
          <BerberText style={styles.header}>Erkek Bakım Merkezi</BerberText>
        </View>
        <View style={styles.adress}>
          <BerberText style={styles.adressHeader}>Adres:</BerberText>
          <BerberText style={styles.adressLine}>
            Kayaşehir Mahallesi Kayaşehir Bulvarı No:17 Merkez/Merzifon
          </BerberText>
        </View>
        <View style={styles.phone}>
          <BerberText style={styles.adressHeader}>Telefon Numarası </BerberText>
          <BerberText style={styles.phoneLine}>0(553) 458 17 17</BerberText>
        </View>
        <View style={styles.phone}>
          <BerberText style={styles.adressHeader}>e-mail</BerberText>
          <BerberText style={styles.phoneLine}>yunus@gmail.com</BerberText>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
    width: scaledWidth(240),
    height: scaledHeight(240),
    borderRadius: 120,
    position: "absolute",
    top: scaledHeight(10),
  },
  modal: {
    position: "relative",
    backgroundColor: colors.white,
    borderRadius: scaledWidth(40),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scaledHeight(60),
    marginHorizontal: scaledHeight(20),
    marginTop: scaledHeight(10),
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  headers: {
    paddingTop: scaledHeight(200),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: scaledHeight(32),
  },
  adress: {
    paddingTop: scaledHeight(20),
    justifyContent: "center",
    flexDirection: "row",
    width: "70%",
  },
  adressHeader: {
    alignSelf: "center",
    fontSize: scaledHeight(22),
    textDecorationLine: "underline",
  },
  adressLine: {
    fontSize: scaledHeight(18),
    paddingLeft: scaledWidth(5),
  },
  phone: {
    paddingTop: scaledHeight(20),
    justifyContent: "center",
    alignItems: "stretch",
  },
  phoneLine: {
    alignSelf: "center",
    fontSize: scaledHeight(18),
    paddingTop: scaledHeight(10),
  },
});
export default ContactScreen;
