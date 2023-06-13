import {HomeStackParams} from '@/navigation/home/HomeStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type MeetingScreenParams = NativeStackScreenProps<HomeStackParams, 'MeetingScreen'>;
const MeetingScreen: React.FC<MeetingScreenParams> = () => {
	return (
		<View style={styles.container}>
			<Text>MeetingScreen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'yellow',
	},
});
export default MeetingScreen;
