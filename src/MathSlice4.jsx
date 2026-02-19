import { createSlice } from "@reduxjs/toolkit";

export const Math4 = createSlice({
  name: 'math4',
  initialState:{
    no:  0,
    name: "mathTask"
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

export default Math4.reducer
export const {incre, decre} = Math4.actions