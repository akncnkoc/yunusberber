import OnBoardingScreen from '@/screens/onBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type OnBoardingStackParams = {
	OnBoardingScreen: undefined;
	AuthStack: undefined;
};

const OnBoardingStackNavigator = createNativeStackNavigator<OnBoardingStackParams>();

const OnBoardingStack: React.FC = () => {
	return (
		<OnBoardingStackNavigator.Navigator initialRouteName="OnBoardingScreen" screenOptions={{headerShown: false}}>
			<OnBoardingStackNavigator.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
		</OnBoardingStackNavigator.Navigator>
	);
};

export default OnBoardingStack;
