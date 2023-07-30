import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import commentApi from "./apis/commentApi";
import feedApi from "./apis/feedApi";
import mallApi from "./apis/mallApi";

export const store = configureStore({
    reducer: {
        [feedApi.reducerPath]: feedApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [mallApi.reducerPath]: mallApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            feedApi.middleware,
            commentApi.middleware,
            mallApi.middleware,
        ),
}
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector