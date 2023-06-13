import {HomeStackParams} from '@/navigation/home/HomeStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ProfileScreenParams = NativeStackScreenProps<HomeStackParams, 'ProfileScreen'>;
const ProfileScreen: React.FC<ProfileScreenParams> = () => {
	return (
		<View style={styles.container}>
			<Text>ProfileScreen</Text>
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
export default ProfileScreen;
