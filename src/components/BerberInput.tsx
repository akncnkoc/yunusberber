import React, { forwardRef, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { colors, padding } from '../theme';
import { scaledHeight, scaledWidth } from '../utils/responsive';
import BerberText from './BerberText';

type BerberInputProps = {
	label?: React.ReactNode | React.ReactNode[];
	labelHidden?: boolean;
	rightComponent?: React.ReactNode;
	leftComponent?: React.ReactNode;
	error?: string | boolean;
	containerStyle?: any;
} & TextInputProps;

const BerberInput = forwardRef((props: BerberInputProps, ref: any) => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});
	const [rightComponentSize, setRightComponentSize] = useState({
		width: 0,
		height: 0,
	});
	const { labelHidden = false } = props;
	return (
		<View
			style={[styles.compStyle, props.containerStyle]}
			onLayout={event => {
				const { width, height } = event.nativeEvent.layout;
				setSize({
					width: width,
					height: height,
				});
			}}>
			{!labelHidden && props.label}
			<TextInput
				ref={ref}
				{...props}
				style={[
					styles.textInput,
					props.style,
					{
						borderBottomColor: props.error ? colors.errorBorderColor : colors.borderColor,
						marginBottom: props.error ? scaledHeight(4) : scaledHeight(0),
					},
				]}
				allowFontScaling={false}
				placeholderTextColor={colors.textPlaceHolderColor}
			/>
			{props.error && <BerberText style={styles.errorText}>{props.error}</BerberText>}
			{props.rightComponent && (
				<View
					style={[
						styles.rightComponentStyle,
						{
							top: size.height / 2,
							transform: [
								{
									translateY: -rightComponentSize.height / 2,
								},
							],
						},
					]}
					onLayout={event => {
						const { width, height } = event.nativeEvent.layout;
						setRightComponentSize({
							width: width,
							height: height,
						});
					}}>
					{props.rightComponent}
				</View>
			)}
			{props.leftComponent && <View style={[styles.leftComponentStyle]}>{props.leftComponent}</View>}
		</View>
	);
});
const styles = StyleSheet.create({
	textInput: {
		paddingHorizontal: 0,
		paddingVertical: padding[1],
		borderBottomColor: colors.borderColor,
		borderBottomWidth: scaledHeight(1),
		color: colors.black,
	},
	rightComponentStyle: {
		position: 'absolute',
		right: 0,
		zIndex: 9999,
	},
	leftComponentStyle: {
		position: 'absolute',
		left: scaledWidth(10),
		zIndex: 9999,
	},
	compStyle: {
		position: 'relative',
	},
	errorText: {
		fontSize: scaledWidth(12),
		color: colors.errorTextColor,
	},
});
export default BerberInput;
