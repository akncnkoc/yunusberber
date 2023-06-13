import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type GlobalType = {
	currentRoute: string | undefined;
};

const initialState: GlobalType = {
	currentRoute: '',
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setCurrentRoute: (state, action: PayloadAction<string | undefined>) => {
			return {
				...state,
				currentRoute: action.payload,
			};
		},
	},
});
export const {setCurrentRoute} = globalSlice.actions;
export default globalSlice.reducer;
