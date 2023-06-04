import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./use.slice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
