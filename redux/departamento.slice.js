import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  departamento: "Todo el Pais",
} 

export const departamento = createSlice({
  name: "user",
  initialState,
  reducers: {

    SET_DEPT: (state, action) => {
        
      return {departamento: action.payload}
    },

  },
});

export const {
  SET_DEPT,

} = departamento.actions;
export default departamento.reducer;