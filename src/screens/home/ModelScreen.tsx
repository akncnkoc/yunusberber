import { HomeStackParams } from "@/navigation/home/HomeStack";
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

const ModelPhotoData = [
  {
    id: 1,
    source: require("@/assets/images/m1.png"),
  },
  {
    id: 2,
    source: require("@/assets/images/m2.png"),
  },
  {
    id: 3,
    source: require("@/assets/images/m3.png"),
  },
  {
    id: 4,
    source: require("@/assets/images/m4.png"),
  },
  {
    id: 5,
    source: require("@/assets/images/m5.png"),
  },
];

type ModelScreenParams = NativeStackScreenProps<HomeStackParams, "ModelScreen">;
const ModelScreen: React.FC<ModelScreenParams> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={ModelPhotoData}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.picture}>
              <Image
                source={item.source}
                style={{
                  resizeMode: "stretch",
                  width: "90%",
                  height: scaledHeight(400),
                  borderRadius: scaledWidth(40),
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    width: "100%",
    alignSelf: "center",
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    padding: scaledHeight(10),
  },
});
export default ModelScreen;
