import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import dashboardUI from "@/store/reducers/ui/dashboard";
import dashboardAPI from "@/store/reducers/api/dashboard";

const uiReducers = combineReducers({
	dashboard: dashboardUI,
});

const apiReducers = combineReducers({
	dashboard: dashboardAPI,
});

const store = configureStore({
	reducer: {
		ui: uiReducers,
		api: apiReducers,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

const makeStore = () =>
	configureStore({
		reducer: {
			ui: uiReducers,
			api: apiReducers,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
	});

export default createWrapper(makeStore);

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
