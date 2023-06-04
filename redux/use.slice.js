import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  data: 0,
} 

export const counter = createSlice({
  name: "user",
  initialState,
  reducers: {

    SET_USER: (state, action) => {
        
      return {value: action.payload}
    },

  },
});

export const {
  SET_USER,

} = counter.actions;
export default counter.reducer;