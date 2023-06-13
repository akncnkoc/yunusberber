import {scaledHeight, scaledWidth} from '@/utils/responsive';
import * as React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import SidText from './BerberText';
import {colors} from '@/theme';
type Props = {
	onComplete: (code: string) => void;
	containerStyle?: ViewStyle;
};

const BerberCodeInput = ({onComplete, containerStyle}: Props) => {
	const [value, setValue] = React.useState('');
	const ref = useBlurOnFulfill({value, cellCount: 6});
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	return (
		<CodeField
			ref={ref}
			{...props}
			autoFocus
			// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
			value={value}
			onChangeText={text => {
				setValue(text);
				if (text.length === 6) {
					onComplete(text);
				}
			}}
			cellCount={6}
			rootStyle={styles.codeFieldRoot}
			keyboardType="number-pad"
			textContentType="oneTimeCode"
			renderCell={({index, symbol, isFocused}) => (
				<View style={[styles.cell, containerStyle]} key={index}>
					<SidText key={index} style={[styles.cellText, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
						{symbol || (isFocused ? <Cursor /> : null)}
					</SidText>
				</View>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	codeFieldRoot: {
		marginTop: scaledHeight(20),
	},
	cell: {
		width: scaledWidth(50),
		height: scaledHeight(50),
		justifyContent: 'center',
		borderBottomColor: colors.borderColor,
		borderBottomWidth: 1,
	},
	cellText: {
		fontSize: scaledWidth(24),
		textAlign: 'center',
		color: colors.black,
	},
	focusCell: {
		borderColor: colors.borderColor,
	},
});
export default BerberCodeInput;
