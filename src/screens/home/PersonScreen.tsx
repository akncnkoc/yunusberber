import BerberText from "@/components/BerberText";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import React, { useRef, useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PersonalLeftSvg from "@/assets/svg/leftIconSvg.svg";
import BerberButton from "@/components/BerberButton";
import { colors } from "@/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CheckSvg from "@/assets/svg/check-mark.svg";
import PersonalSvg from "@/assets/svg/personal.svg";
import AgeSvg from "@/assets/svg/age.svg";
import CitySvg from "@/assets/svg/city.svg";
const PersonalData = [
  {
    id: 1,
    name: "Mahmut Tuncer",
    age: 28,
    city: "Denizli",
    services: ["Saç Kesimi", "Sakal Kesimi"],
    phone: "0(553)458 17 17",
  },
  {
    id: 2,
    name: "Ferdi Tayfur",
    age: 35,
    city: " Diyarbakır",
    services: ["Saç Boyama", "Sakal Kesimi"],
    phone: "0(553)458 17 17",
  },
  {
    id: 3,
    name: "Orhan Gencebay",
    age: 50,
    city: "Kayseri",
    services: ["Yüz Bakımı", "Sakal Kesimi"],
    phone: "0(553)458 17 17",
  },
  {
    id: 4,
    name: "Georghe Hagi",
    age: 47,
    city: "Adana",
    services: ["Saç Kesimi", "Saç Boyama", "Yüz Bakımı", "Sakal Kesimi"],
    phone: "0(553)458 17 17",
  },
];

const PersonScreen = ({ navigation, route }: any) => {
  const dimension = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const [personalIndex, setPersonalIndex] = useState<number | null>();
  const [choosePersonalState, setChoosePersonalState] =
    useState<boolean>(false);
  const personalRef = useRef<FlatList>(null);
  const selectPersonal = (personalId: number) => {
    if (!personalId) {
      return;
    }
    if (personalId === personalIndex) {
      setPersonalIndex(null);
      return;
    }
    setChoosePersonalState(true);
    setPersonalIndex(personalId);
  };

  const nextBackNav = (currentIndex: number, buttonType: string) => {
    if (buttonType === "back" && currentIndex <= 0) {
      return;
    }
    if (buttonType === "next" && currentIndex >= PersonalData.length - 1) {
      return;
    }
    personalRef.current?.scrollToIndex({
      animated: true,
      index: buttonType === "next" ? currentIndex + 1 : currentIndex - 1,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        pagingEnabled
        ref={personalRef}
        horizontal
        data={PersonalData}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <ScrollView
                bounces={false}
                style={{
                  height: dimension.height,
                  width: dimension.width,
                }}
              >
                <View
                  style={{
                    zIndex: 9999,
                    borderWidth: scaledWidth(8),
                    borderColor:
                      personalIndex === item.id
                        ? colors.mainColor
                        : colors.white,
                    marginHorizontal: scaledWidth(60),
                    marginTop: scaledHeight(10),
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 6,
                    elevation: 5,
                  }}
                >
                  <View>
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 9999,
                        width: "100%",
                        height: "100%",
                        display: personalIndex === item.id ? "flex" : "none",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></View>
                    <Image
                      source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
                      }}
                      resizeMode="stretch"
                      style={{
                        width: "100%",
                        height: scaledHeight(250),
                        opacity: personalIndex === item.id ? 0.3 : 1,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{ alignSelf: "center", paddingTop: scaledHeight(16) }}
                >
                  <BerberText
                    style={{
                      fontSize: scaledHeight(20),
                      fontWeight: "bold",
                      padding: scaledWidth(2),
                    }}
                  >
                    <PersonalSvg />
                    {item.name}{" "}
                  </BerberText>
                  <BerberText
                    style={{
                      alignSelf: "center",
                      fontSize: scaledHeight(18),
                      padding: scaledWidth(2),
                    }}
                  >
                    <AgeSvg />
                    {item.age}
                    {"  Yaşında"}
                  </BerberText>
                  <BerberText
                    style={{
                      alignSelf: "center",
                      fontSize: scaledHeight(18),
                      padding: scaledWidth(2),
                    }}
                  >
                    <CitySvg />
                    {item.city}
                  </BerberText>
                  <BerberText
                    style={{
                      alignSelf: "center",
                      fontSize: scaledHeight(18),
                      padding: scaledWidth(2),
                    }}
                  >
                    {item.phone}
                  </BerberText>
                </View>
                <View style={{ flex: 1, margin: scaledWidth(20) }}>
                  <BerberText
                    style={{
                      fontWeight: "700",
                      alignSelf: "center",
                      textDecorationLine: "underline",
                      fontSize: scaledHeight(18),
                    }}
                  >
                    Hizmetler
                  </BerberText>
                  {item.services.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        paddingLeft: dimension.width - dimension.width / 1.4,
                        paddingTop: scaledHeight(10),
                      }}
                    >
                      <CheckSvg />
                      <BerberText
                        key={index}
                        style={{
                          fontSize: scaledHeight(22),
                          fontWeight: "500",
                          alignSelf: "center",
                          color: colors.mainColor,
                        }}
                      >
                        {item}
                      </BerberText>
                    </View>
                  ))}
                </View>

                <View
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    paddingTop: scaledHeight(140),
                    zIndex: 0,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => nextBackNav(index, "back")}
                      >
                        <PersonalLeftSvg />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        zIndex: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: scaledWidth(300),
                        transform: [{ rotateY: "180deg" }],
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => nextBackNav(index, "next")}
                      >
                        <PersonalLeftSvg />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </>
          );
        }}
      />
    </View>
  );
};

export default PersonScreen;
