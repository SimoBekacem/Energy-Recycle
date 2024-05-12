import { configureStore } from '@reduxjs/toolkit';
import routeReducer from './slices/router.slice';

export const store = configureStore({
	reducer: {
		route: routeReducer,
	},
});
