import React, { forwardRef, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import Masks, { parsePhoneNumber } from "@/helpers/Masks";
import { colors } from "@/theme";
import { scaledHeight, scaledWidth } from "@/utils/responsive";
import BerberText from "./BerberText";
import TurkeyFlagSvg from "@/assets/svg/TurkeyFlagSvg";

type AutoCapitalizeTypes =
  | "none"
  | "sentences"
  | "words"
  | "characters"
  | undefined;
type BerberPhoneInputTypes = {
  defaultValue?: string;
  autoFocus?: boolean;
  onChangeText: TextInputProps;
  isValid?: any;
  onBlur?: TextInputProps;
  title?: string;
  editable?: boolean;
  multiline?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: AutoCapitalizeTypes;
  isSecureText?: boolean;
  placeholder?: string;
  maxLength?: number;
  backgroundColor?: string;
  errorText?: string | false | null | undefined;
  isShowErrorBorder?: boolean;
  textInputContainerStyle?: ViewStyle | any;
  containerStyles?: ViewStyle | any;
  leftComponent?: React.ReactNode | React.ReactNode[] | undefined;
  rightComponent?: React.ReactNode | React.ReactNode[] | undefined;
} & TextInputProps;
const BerberPhoneInput = forwardRef(
  (props: BerberPhoneInputTypes, ref: any) => {
    const formatStringByPattern = require("format-string-by-pattern");
    const [isValidation, setIsValidation] = useState<boolean>(false);
    const {
      defaultValue,
      autoFocus = false,
      onChangeText,
      isValid,
      onBlur,
      title,
      multiline = false,
      editable = true,
      autoCapitalize = "words",
      autoCorrect = false,
      isSecureText,
      placeholder,
      maxLength = 14,
      textInputContainerStyle,
      errorText,
      isShowErrorBorder,
      backgroundColor = colors.white,
      containerStyles,
      rightComponent,
    } = props;
    const [inputValue, setInputValue] = useState<string>();

    const checkValidation = (str: string) => {
      const value = formatStringByPattern(Masks.parse.phone.unMask, str);
      if (!value) {
        setIsValidation(false);
        return;
      }
      if (value.length < 10) {
        setIsValidation(false);
        return;
      }
      setIsValidation(/^\d+$/.test(value));
    };

    useEffect(() => {
      if (isValid) {
        isValid(isValidation);
      }
    }, [isValid, isValidation]);

    return (
      <View style={containerStyles}>
        {title && <BerberText style={styles.title}>{title}</BerberText>}
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor,
              borderColor:
                errorText || isShowErrorBorder
                  ? colors.errorBorderColor
                  : backgroundColor,
              paddingVertical: scaledHeight(Platform.OS === "ios" ? 0 : 0),
            },
          ]}
        >
          <View style={styles.leftComponentView}>
            <View style={styles.leftItems}>
              <TurkeyFlagSvg />
              <BerberText style={styles.phoneAreaCode}>+90</BerberText>
            </View>
            <TextInput
              {...props}
              autoFocus={autoFocus}
              value={inputValue}
              defaultValue={defaultValue}
              onChangeText={(value) => {
                setInputValue(parsePhoneNumber(value));
                onChangeText(
                  `+90${formatStringByPattern(Masks.parse.phone.unMask, value)}`
                );
                checkValidation(value);
              }}
              allowFontScaling={false}
              onBlur={onBlur}
              multiline={multiline}
              editable={editable}
              autoCapitalize={autoCapitalize}
              autoCorrect={autoCorrect}
              secureTextEntry={isSecureText}
              keyboardType={"number-pad"}
              placeholder={placeholder}
              placeholderTextColor={colors.white}
              maxLength={maxLength}
              style={[styles.inputText, textInputContainerStyle]}
              ref={ref}
            />
          </View>
          {rightComponent && (
            <View style={styles.center}>{rightComponent}</View>
          )}
        </View>
        {errorText && (
          <BerberText style={styles.errorText}>{errorText}</BerberText>
        )}
      </View>
    );
  }
);
export default BerberPhoneInput;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: scaledHeight(5),
    paddingHorizontal: scaledWidth(15),
    borderRadius: scaledWidth(6),
    borderWidth: scaledWidth(1),
  },
  inputText: {
    flex: 1,
    fontSize: scaledWidth(16),
    color: colors.black,
  },
  leftComponentView: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },
  title: {
    color: colors.black,
    fontSize: scaledHeight(16),
  },
  errorText: {
    color: colors.errorBorderColor,
    fontSize: scaledWidth(14),
    marginTop: scaledHeight(5),
    alignSelf: "flex-end",
  },
  center: {
    justifyContent: "center",
  },
  leftItems: {
    alignItems: "center",
    marginLeft: scaledWidth(-10),
    flexDirection: "row",
  },
  phoneAreaCode: {
    fontSize: scaledWidth(16),
    marginLeft: scaledWidth(10),
    color: colors.black,
  },
});
