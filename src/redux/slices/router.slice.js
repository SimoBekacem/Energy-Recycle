import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'home',
};

export const routeSlice = createSlice({
	name: 'route',
	initialState,
	reducers: {
		changeRoute: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { changeRoute } = routeSlice.actions;

export default routeSlice.reducer;
