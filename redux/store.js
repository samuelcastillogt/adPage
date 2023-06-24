import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./use.slice";
import departamenReducer from './departamento.slice';
export const store = configureStore({
  reducer: {
    counterReducer,
    departamento: departamenReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
