import BerberButton from "@/components/BerberButton";
import BerberText from "@/components/BerberText";
import { colors } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import IconSvgWalkerCalendarLeft from "@/assets/svg/IconSvgWalkerCalenderLeft";
import IconSvgWalkerCalendarRight from "@/assets/svg/IconSvgWalkerCalenderRight";
import moment, { Moment } from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import IconSvgWalkerCalendar from "@/assets/svg/IconSvgWalkerCalendar";
import IconSvgWalkerTime from "@/assets/svg/IconSvgWalkerTime";
import "moment/locale/tr";

const ChooseDate = ({ navigation, route }) => {
  // const [date, setDate] = useState(new Date());
  // var startTime = new Date();

  // startTime.setHours(9);
  // startTime.setMinutes(0);
  // var finishTime = new Date();
  // finishTime.setFullYear(1);
  // finishTime.setHours(23);
  // finishTime.setMinutes(0);
  //---------------------- Saati seçtiğimiz yer için ilgili alan
  const timeHour = null;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
    console.log(formattedDate);

    setTime(moment(date).locale("tr").format("HH:mm").toString());
    hideDatePicker();
  };
  //--------------------
  //--------------------------- tarihi seçtiğimiz alan ile ilgili yer

  const servicesText = [
    "Saç Kesimi",
    "Sakal Kesimi",
    "Saç Boyama",
    "Saç Yıkama",
    "Yüz Yıkama",
  ];

  const [SelectedStartDate, setSelectedStarDate] = useState("");
  const onDateChange = (date: Moment) => {
    setSelectedStarDate(date.locale("tr").format("DD.MM.YYYY dd"));
  };
  const startDate = SelectedStartDate ? SelectedStartDate.toString() : "";
  const today = new Date();

  //-----------------------------

  const customDatesStyles = () => ({
    textStyle: {
      color: colors.mainColor,
      fontSize: scaledHeight(18),
      fontWeight: "500",
    },
  });

  const customDayHeaderStylesCallback = () => ({
    textStyle: {
      color: colors.gray1,
      fontSize: scaledHeight(14),
      fontWeight: "700",
    },
  });
  var minTime = new Date();
  minTime.setHours(9);
  minTime.setMinutes(0);
  minTime.setMilliseconds(0);

  var maxTime = new Date();
  maxTime.setHours(22);
  maxTime.setMinutes(0);
  maxTime.setMilliseconds(0);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 9999,
          marginTop: scaledHeight(10),
          paddingTop: scaledHeight(10),
          width: scaledWidth(360),
          height: scaledWidth(300),
          backgroundColor: "white",
          borderRadius: scaledWidth(40),
          alignSelf: "center",
        }}
      >
        <CalendarPicker
          startFromMonday={true}
          minDate={today}
          weekdays={["Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt", "Pzr"]}
          months={[
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım ",
            "Aralık",
          ]}
          previousTitle="Önceki"
          nextTitle="Sonraki"
          todayBackgroundColor={colors.gray10}
          selectedDayColor={colors.mainColor}
          monthYearHeaderWrapperStyle={{
            fontSize: scaledHeight(18),
            fontWeight: "500",
            marginBottom: 10,
            padding: 0,
          }}
          headerWrapperStyle={{ marginLeft: 20 }}
          selectedDayTextColor="white"
          width={340}
          onDateChange={onDateChange}
          previousComponent={<IconSvgWalkerCalendarLeft />}
          nextComponent={<IconSvgWalkerCalendarRight />}
          customDatesStyles={customDatesStyles}
          customDayHeaderStyles={customDayHeaderStylesCallback}
        />
      </View>
      <View style={styles.head}>
        <BerberText style={styles.headText}>Randevu Saati Seç</BerberText>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          minuteInterval={30}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale="tr-Tr"
          minimumDate={minTime}
          maximumDate={maxTime}
          cancelTextIOS="Sonlandır"
          confirmTextIOS="Onayla"
        />
        <BerberButton style={styles.button} onPress={showDatePicker}>
          <IconSvgWalkerTime />
          <BerberText style={styles.buttonTextStyle}>Saat Seç</BerberText>
        </BerberButton>
      </View>
      <View
        style={{
          backgroundColor: "white",
          margin: scaledHeight(10),
          borderRadius: scaledHeight(40),
        }}
      >
        <BerberText
          style={{
            alignSelf: "center",
            paddingTop: scaledHeight(30),
            fontSize: scaledHeight(30),
            color: colors.black,
          }}
        >
          Randevu Zamanı Özeti
        </BerberText>
        <View style={styles.textSecondView}>
          <View style={styles.textFirstViewFirstRow}>
            <View style={styles.walkerDate}>
              <BerberText style={styles.head}>Randevu Tarihi</BerberText>
              <View style={styles.downRow}>
                <IconSvgWalkerCalendar />
                <BerberText style={{ fontSize: scaledHeight(18) }}>
                  {" "}
                  {startDate}{" "}
                </BerberText>
              </View>
            </View>
            <View style={styles.takeDate}>
              <BerberText style={styles.head}>Randevu Saati</BerberText>
              <View style={styles.downRow}>
                <IconSvgWalkerTime />
                <BerberText style={{ fontSize: scaledHeight(18) }}>
                  {time}
                </BerberText>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <BerberButton
          onPress={() =>
            navigation.navigate("MeetingFinish", {
              gender: route.params.gender,
              services: route.params.services,
              personal: route.params.personal,
              startDate: startDate,
              time: time,
            })
          }
          disabled={!startDate || !time}
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
            {!startDate || !time
              ? "Randevu Günü ve Saatini Seçiniz"
              : "Devam Et"}
          </BerberText>
        </BerberButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    fontWeight: "500",
    color: colors.mainColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: scaledWidth(5),
    fontSize: scaledHeight(18),
  },
  headText: {
    color: colors.black2,
    fontSize: scaledWidth(18),
    fontWeight: "700",
    marginTop: scaledHeight(320),
  },
  button: {
    marginTop: scaledHeight(10),
    backgroundColor: colors.mainColor,
    height: scaledHeight(40),
    justifyContent: "center",
    borderRadius: scaledHeight(40),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    width: scaledWidth(200),
  },
  buttonTextStyle: {
    fontWeight: "700",
    color: colors.white,
    fontSize: scaledWidth(20),
    marginLeft: scaledWidth(10),
  },
  textSecondView: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 40,
    borderRadius: scaledHeight(40),
  },
  textFirstViewFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walkerDate: {
    marginLeft: 5,
  },
  downRow: {
    paddingTop: scaledHeight(10),
    flexDirection: "row",
    alignItems: "center",
  },
  takeDate: {
    marginLeft: 5,
  },
  pickUp: {
    marginRight: scaledWidth(-20),
  },
  downRowText: {
    fontSize: scaledWidth(13),
    fontWeight: "400",
  },
});
export default ChooseDate;
