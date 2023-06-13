import {colors} from '@/theme';
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

type BerberTextProps = {} & TextProps;
const BerberText: React.FC<BerberTextProps> = props => {
	return (
		<Text {...props} style={[styles.textStyle, props.style]}>
			{props.children}
		</Text>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		color: colors.black,
	},
});
export default BerberText;
