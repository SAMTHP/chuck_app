import { configureStore, combineReducers } from "@reduxjs/toolkit";

import jokeSlice from "./slices/JokeSlice";

const rootReducer = combineReducers({
    jokeInfo: jokeSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
