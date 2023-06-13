import React from "react";
import { Image, View } from "react-native";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { TouchableOpacity } from "react-native-gesture-handler";
import BerberText from "@/components/BerberText";
import { colors } from "@/theme";

const MeetingHeader = ({ activeId }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: scaledWidth(20),
        alignItems: "center",
      }}
    >
      <View style={{ flex: 0.2 }}></View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: scaledWidth(25),
            height: scaledHeight(25),
            backgroundColor: activeId == 1 ? colors.mainColor : "lightblue",
            borderRadius: scaledHeight(20),
          }}
        >
          <View>
            <BerberText
              style={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                paddingTop: scaledHeight(5),
              }}
            >
              1
            </BerberText>
          </View>
        </View>
        <View
          style={{
            width: scaledWidth(25),
            height: scaledHeight(25),
            backgroundColor: activeId == 2 ? colors.mainColor : "lightblue",
            borderRadius: scaledHeight(20),
            marginLeft: scaledWidth(5),
          }}
        >
          <View>
            <BerberText
              style={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                paddingTop: scaledHeight(5),
              }}
            >
              2
            </BerberText>
          </View>
        </View>
        <View
          style={{
            width: scaledWidth(25),
            height: scaledHeight(25),
            backgroundColor: activeId == 3 ? colors.mainColor : "lightblue",
            borderRadius: scaledHeight(20),
            marginLeft: scaledWidth(5),
          }}
        >
          <View>
            <BerberText
              style={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                paddingTop: scaledHeight(5),
              }}
            >
              3
            </BerberText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MeetingHeader;
