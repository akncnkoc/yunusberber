import BerberText from "@/components/BerberText";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MeetingHeader from "./components/MeetingHeader";
import BerberButton from "@/components/BerberButton";
import { colors } from "@/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { isEmpty } from "lodash";
import { Pressable } from "react-native";

export type ServiceType = {
  id: number;
  title: string;
  price: number;
};
const serviceData: Array<ServiceType> = [
  {
    id: 1,
    title: "Saç Kesimi",
    price: 100,
  },
  {
    id: 2,
    title: "Sakal Kesimi",
    price: 50,
  },

  {
    id: 3,
    title: "Saç Boyama",
    price: 250,
  },
  {
    id: 4,
    title: "Saç Yıkama",
    price: 50,
  },
  {
    id: 5,
    title: "Yüz Bakımı",
    price: 100,
  },
];

const ChooseService = ({ navigation, route }) => {
  const [selectedServices, setSelectedServices] = useState<typeof serviceData>(
    []
  );

  const selectService = (service: ServiceType) => {
    const findedService = selectedServices.findIndex(
      (item: ServiceType) => item.id == service.id
    );
    if (findedService == -1) setSelectedServices((prev) => [...prev, service]);
    else {
      setSelectedServices(
        selectedServices.filter((item) => item.id != service.id)
      );
    }
  };

  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: scaledHeight(40) }}>
      <MeetingHeader activeId={2} />
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: scaledHeight(40),
          marginTop: scaledHeight(40),
        }}
        data={serviceData}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => selectService(item)}
              key={index.toString()}
              style={{
                width: width - scaledWidth(20),
                backgroundColor: "white",
                paddingHorizontal: scaledWidth(20),
                paddingVertical: scaledHeight(20),
                marginTop: scaledHeight(10),
                borderWidth: scaledHeight(3),
                borderColor: selectedServices.some(
                  (item2) => item.id == item2.id
                )
                  ? colors.mainColor
                  : "transparent",
                flexDirection: "row",
                justifyContent: "space-between",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.17,
                shadowRadius: 4.65,
                elevation: 2,
                borderRadius: scaledHeight(25),
              }}
            >
              <View>
                <BerberText
                  style={{ fontSize: scaledHeight(18), fontWeight: "bold" }}
                >
                  {item.title}
                </BerberText>
              </View>
              <View>
                <BerberText
                  style={{
                    paddingTop: scaledHeight(5),
                    fontWeight: "bold",
                    fontSize: scaledHeight(18),
                  }}
                >
                  {item.price}₺
                </BerberText>
              </View>
            </Pressable>
          );
        }}
      />

      {!isEmpty(selectedServices) && (
        <View
          style={{
            width: width,
            position: "absolute",
            bottom: 0,
          }}
        >
          <BerberButton
            onPress={() =>
              navigation.navigate("ChoosePersonal", {
                gender: route.params.gender,
                services: selectedServices,
              })
            }
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
              Devam Et
            </BerberText>
          </BerberButton>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChooseService;
