import { createSlice } from "@reduxjs/toolkit";

export const Math3 = createSlice({
  name: 'mathTask3',
  initialState:{
    no:0,
    name:"mathtask"
  },
  reducers:{
    incre: (state) => {
      state.no += 1
    },
    decre: (state) => {
      state.no -= 1
    }
  }
})

export default Math3.reducer
export const {incre, decre} = Math3.actions