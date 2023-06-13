import React, { useRef, useState } from "react";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import { View, SafeAreaView, StyleSheet } from "react-native";
import BerberText from "@/components/BerberText";
import BerberButton from "@/components/BerberButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MeetingHeader from "./components/MeetingHeader";
import { MeetingStackParams } from "@/navigation/meeting/MeetingStack";
import { colors } from "@/theme";
import BerberBarNav from "@/components/BerberBarNav";
import { Pressable } from "react-native";

type ChooseGenderScreenParams = NativeStackScreenProps<
  MeetingStackParams,
  "ChooseGender"
>;
const ChooseGender: React.FC<ChooseGenderScreenParams> = ({ navigation }) => {
  const HoverAnimationFemale = useRef<Lottie>(null);
  const HoverAnimationMale = useRef<Lottie>(null);
  const [selectedGender, setSelectedGender] = useState<string>("Male");

  const PlayAnimationFemale = () => {
    if (!HoverAnimationFemale) {
      return;
    }
    setSelectedGender("Female");
    HoverAnimationMale.current?.reset();
    HoverAnimationFemale.current?.play(30, 120);
  };

  const PlayAnimationMale = () => {
    if (!HoverAnimationMale) {
      return;
    }
    setSelectedGender("Male");
    HoverAnimationFemale.current?.reset();
    HoverAnimationMale.current?.play(30, 120);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "stretch" }}>
        <View style={styles.barNav}>
          <BerberBarNav onGoBack={() => navigation.goBack()} activeIndex={2} />
        </View>
        <MeetingHeader activeId={1} />
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          paddingLeft: scaledWidth(20),
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: scaledHeight(40),
          gap: scaledWidth(10),
        }}
      >
        <Pressable
          onPress={PlayAnimationFemale}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "white",
            borderWidth: scaledHeight(2),
            borderColor:
              selectedGender === "Female" ? colors.mainColor : colors.white,
            borderRadius: scaledHeight(10),
            overflow: "hidden",
          }}
        >
          <Lottie
            ref={HoverAnimationFemale}
            source={require("@/assets/animations/chooseGenderFemale.json")}
            loop={false}
          />
        </Pressable>

        <Pressable
          onPress={PlayAnimationMale}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "white",
            borderWidth: scaledHeight(2),
            borderColor:
              selectedGender === "Male" ? colors.mainColor : colors.white,
            borderRadius: scaledHeight(10),
            overflow: "hidden",
          }}
        >
          <Lottie
            ref={HoverAnimationMale}
            source={require("@/assets/animations/chooseGenderMale.json")}
            loop={false}
          />
        </Pressable>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <BerberButton
          onPress={() =>
            navigation.navigate("ChooseService", { gender: selectedGender })
          }
          style={{
            padding: scaledHeight(20),
            paddingHorizontal: scaledWidth(40),
            backgroundColor: colors.mainColor,
            borderRadius: scaledHeight(20),
          }}
        >
          <BerberText
            style={{
              color: "white",
              fontSize: scaledHeight(18),
              fontWeight: "700",
            }}
          >
            Devam Et
          </BerberText>
        </BerberButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mainColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scaledHeight(10),
  },
  barNav: {},
});
export default ChooseGender;
