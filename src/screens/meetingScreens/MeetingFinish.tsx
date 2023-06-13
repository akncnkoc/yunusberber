import BerberText from "@/components/BerberText";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import React, { useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Lottie from "lottie-react-native";
import BerberButton from "@/components/BerberButton";
import { colors } from "@/theme";
import IconSvgWalkerCalendar from "@/assets/svg/IconSvgWalkerCalendar";
import IconSvgWalkerTime from "@/assets/svg/IconSvgWalkerTime";
import CheckSvg from "@/assets/svg/check-mark.svg";
import PersonalSvg from "@/assets/svg/personal.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MeetingStackParams } from "@/navigation/meeting/MeetingStack";
import { CompositeScreenProps } from "@react-navigation/native";
import { AppStackNavigatorParams } from "@/navigation/app/AppStack";
import { MainStackNavigatorParams } from "@/navigation/MainStack";

type MeetingFinishScreenParams = CompositeScreenProps<
  NativeStackScreenProps<MeetingStackParams, "MeetingFinish">,
  NativeStackScreenProps<MainStackNavigatorParams>
>;

const MeetingFinish: React.FC<MeetingFinishScreenParams> = ({
  navigation,
  route,
}) => {
  const successVectorRef = useRef<Lottie>(null);

  useEffect(() => {
    successVectorRef.current?.play();
  });

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <BerberText
            style={{
              fontSize: scaledHeight(24),
              textAlign: "center",
              fontWeight: "bold",
              paddingHorizontal: scaledWidth(20),
            }}
          >
            Randevunuz Başarıyla Oluşturuldu
          </BerberText>

          <Lottie
            ref={successVectorRef}
            source={require("@/assets/animations/success-vector.json")}
            loop={false}
            style={{ width: scaledWidth(100), height: scaledHeight(100) }}
          />
          <View
            style={{
              backgroundColor: "white",
              borderRadius: scaledHeight(40),
            }}
          >
            <BerberText
              style={{
                alignSelf: "center",
                paddingTop: scaledHeight(10),
                fontSize: scaledHeight(26),
                color: colors.mainColor,
                textDecorationLine: "underline",
              }}
            >
              Randevu Özeti
            </BerberText>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <PersonalSvg />
              <BerberText
                style={{
                  alignSelf: "center",
                  fontSize: scaledHeight(18),
                  color: colors.black,
                  fontWeight: "400",
                }}
              >
                Berberiniz:{" "}
              </BerberText>
              <BerberText
                style={{
                  alignSelf: "center",
                  fontSize: scaledHeight(18),
                  color: colors.black,
                  fontWeight: "300",
                }}
              >
                {(route.params.personal === 1 && "Mahmut Tuncer") ||
                  (route.params.personal === 2 && "Ferdi Tayfur") ||
                  (route.params.personal === 3 && "Orhan Gencebay")}
              </BerberText>
            </View>
            {/* <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <BerberText
            style={{
              alignSelf: "center",
              fontSize: scaledHeight(18),
              color: colors.black,
              fontWeight: "500",
            }}
          >
            Cinsiyet:
          </BerberText>
          <BerberText
            style={{
              alignSelf: "center",
              fontSize: scaledHeight(18),
              color: colors.black,
              fontWeight: "300",
            }}
          >
            {(route.params.gender === "Male" && "Erkek") ||
              (route.params.gender === "Female" && "Kız")}
          </BerberText>
        </View> */}
            <View style={{ margin: scaledWidth(20) }}>
              <BerberText
                style={{
                  fontWeight: "400",
                  alignSelf: "center",
                  textDecorationLine: "underline",
                  fontSize: scaledHeight(18),
                }}
              >
                Alacağınız Hizmetler
              </BerberText>
              {route.params.services.map((item, key) => (
                <View
                  key={key}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: scaledHeight(20),
                  }}
                >
                  <View
                    key={key}
                    style={{
                      flexDirection: "row",
                      paddingLeft: scaledWidth(20),
                    }}
                  >
                    {/* <CheckSvg /> */}
                    <BerberText
                      key={key}
                      style={{
                        fontSize: scaledHeight(18),
                        fontWeight: "300",
                        alignSelf: "center",
                        color: colors.black,
                      }}
                    >
                      {item.title}
                    </BerberText>
                  </View>
                  <BerberText
                    style={{
                      fontSize: scaledHeight(18),
                      fontWeight: "300",
                      alignSelf: "center",
                      color: colors.black,
                    }}
                  >
                    {" "}
                    {item.price}
                    {" TL"}
                  </BerberText>
                </View>
              ))}
            </View>
            <View style={styles.textSecondView}>
              <View style={styles.textFirstViewFirstRow}>
                <View style={styles.walkerDate}>
                  <BerberText style={styles.head}>Randevu tarihi</BerberText>
                  <View style={styles.downRow}>
                    <IconSvgWalkerCalendar />
                    <BerberText style={{ fontSize: scaledHeight(18) }}>
                      {" "}
                      {route.params.startDate}{" "}
                    </BerberText>
                  </View>
                </View>
                <View style={styles.takeDate}>
                  <BerberText style={styles.head}>Randevu Saati</BerberText>
                  <View style={styles.downRow}>
                    <IconSvgWalkerTime />
                    <BerberText style={{ fontSize: scaledHeight(18) }}>
                      {route.params.time}
                    </BerberText>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <BerberButton
          onPress={() => navigation.replace("AppStack")}
          style={{
            paddingHorizontal: scaledWidth(40),
            backgroundColor: colors.mainColor,
            borderTopLeftRadius: scaledHeight(60),
            borderTopRightRadius: scaledHeight(60),
          }}
        >
          <BerberText
            style={{
              flex: 1,
              color: "white",
              alignSelf: "center",
              paddingTop: scaledHeight(20),
              marginBottom: scaledHeight(40),
              fontSize: scaledHeight(20),
              fontWeight: "700",
            }}
          >
            {"Ana Sayfaya Git"}
          </BerberText>
        </BerberButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textSecondView: {
    flexDirection: "column",
    marginHorizontal: scaledHeight(40),
    marginVertical: scaledHeight(40),
    borderRadius: scaledHeight(40),
  },
  textFirstViewFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walkerDate: {
    marginLeft: scaledWidth(5),
  },
  downRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  takeDate: {
    marginLeft: scaledWidth(5),
  },
  head: {
    fontWeight: "300",
    fontSize: scaledWidth(18),
    color: colors.mainColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: scaledWidth(5),
  },
});
export default MeetingFinish;
