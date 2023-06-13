import ChevronLeftSvg from '@/assets/svg/ChevronLeftSvg';
import {colors} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type SidBarProps = {
	activeIndex: number;
	logo?: boolean;
	onGoBack?: () => void;
};
const BerberBarNav: React.FC<SidBarProps> = props => {
	const dimension = Dimensions.get('window');
	const {logo = false} = props;
	const logoRef = useRef<View>(null);

	return (
		<View style={styles.firstView}>
			<View style={styles.leftandLogo}>
				<TouchableOpacity onPress={() => props.onGoBack && props.onGoBack()} style={styles.chevronLeft}>
					{<ChevronLeftSvg />}
				</TouchableOpacity>
				{logo && (
					<View ref={logoRef} style={[styles.logo, {left: dimension.width / 2.5}]}>
						<Text style={styles.logoText}>Sid</Text>
					</View>
				)}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	firstView: {
		marginTop: scaledHeight(60),
	},
	leftandLogo: {
		flexDirection: 'row',
	},
	logo: {
		flexDirection: 'row',
	},
	logoText: {
		color: colors.white,
		paddingLeft: scaledWidth(4),
	},
	chevronLeft: {
		marginLeft: scaledWidth(22),
	},
});
export default BerberBarNav;
