import {configureStore} from '@reduxjs/toolkit';
import signUpSlice from './auth/signUpSlice';
import globalSlice from './global/globalSlice';

const store = configureStore({
	reducer: {
		signUpSlice,
		globalSlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
