import React from 'react';
import MainStack from '@/navigation/MainStack';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import {useAppDispatch} from '@/redux/hooks';
import {setCurrentRoute} from '@/redux/global/globalSlice';

const NavigationContainerBase: React.FC = () => {
	const getCurrentRoute = (state: NavigationState | Required<NavigationState['routes'][0]>['state']): any | undefined => {
		if (state.index === undefined || state.index < 0) {
			return undefined;
		}
		const nestedState = state.routes[state.index].state;
		if (nestedState !== undefined) {
			return getCurrentRoute(nestedState);
		}
		return state.routes[state.index].name;
	};

	const dispatch = useAppDispatch();
	const onNavigationStateChanged = (state: NavigationState | undefined) => {
		if (state === undefined) {
			dispatch(setCurrentRoute(undefined));
		} else {
			dispatch(setCurrentRoute(getCurrentRoute(state)));
		}
	};
	return (
		<NavigationContainer onStateChange={onNavigationStateChanged}>
			<MainStack />
		</NavigationContainer>
	);
};
export default NavigationContainerBase;
