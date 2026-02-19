import { createSlice } from "@reduxjs/toolkit";

export const plus = createSlice({
  name: "plusTask",
  initialState:{
    no: 0,
    name: 'plus'
  },
  reducers:{
    incre : (state) => {
      state.no +=1
    }, 
    decre : (state) => {
      state.no -=1
    }
  }
});

export default plus.reducer
export const {incre, decre} = plus.actions