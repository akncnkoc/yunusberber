import CodeScreen from '@/screens/auth/codeScreen';
import SignInScreen from '@/screens/auth/signInScreen';
import SignUpScreen from '@/screens/auth/signUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type AuthStackParams = {
	SignUpScreen: undefined;
	SignInScreen: undefined;
	CodeScreen: undefined;
	HomeStack: undefined;
	AppStack: undefined;
};

const AuthStackNavigator = createNativeStackNavigator<AuthStackParams>();

const AuthStack: React.FC = () => {
	return (
		<AuthStackNavigator.Navigator initialRouteName="SignUpScreen" screenOptions={{headerShown: false}}>
			<AuthStackNavigator.Screen name="SignInScreen" component={SignInScreen} />
			<AuthStackNavigator.Screen name="SignUpScreen" component={SignUpScreen} />
			<AuthStackNavigator.Screen name="CodeScreen" component={CodeScreen} />
		</AuthStackNavigator.Navigator>
	);
};

export default AuthStack;
