import BerberText from "@/components/BerberText";
import { HomeStackParams } from "@/navigation/home/HomeStack";
import { colors } from "@/theme";
import { scaledHeight } from "@/utils/responsive";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const BarberPhotoData = [
  {
    id: 1,
    name: "Saç Traşı",
    price: 100,
  },
  {
    id: 2,
    name: "Sakal Traşı",
    price: 50,
  },
  {
    id: 3,
    name: "Saç Boyama",
    price: 200,
  },
  {
    id: 4,
    name: "Saç Yıkama",
    price: 50,
  },
  {
    id: 5,
    name: "Yüz Bakımı",
    price: 50,
  },
];
type PriceScreenParams = NativeStackScreenProps<HomeStackParams, "PriceScreen">;
const PriceScreen: React.FC<PriceScreenParams> = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 1, width: "100%" }}
        source={require("@/assets/images/priceBg.png")}
      />
      <View style={styles.priceView}>
        <BerberText style={styles.header}>Fiyat Listesi</BerberText>
        <FlatList
          contentContainerStyle={{ padding: 14 }}
          data={BarberPhotoData}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <View style={styles.priceFlat}>
                  <BerberText style={styles.words}>{item.name}</BerberText>
                  <BerberText style={styles.words}>
                    {" "}
                    {item.price} TL{" "}
                  </BerberText>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  priceView: {
    padding: scaledHeight(10),
    position: "absolute",
    width: "66%",
    height: "68%",
    backgroundColor: colors.gray12,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 24.65,
    elevation: 2,
  },
  priceFlat: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: scaledHeight(10),
    borderBottomWidth: 1,
    borderColor: colors.mainColor,
  },
  header: {
    alignSelf: "center",
    fontSize: scaledHeight(38),
    color: colors.mainColor,
  },
  words: {
    fontSize: scaledHeight(19),
  },
});
export default PriceScreen;
