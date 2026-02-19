import { createSlice } from "@reduxjs/toolkit";

export const Math = createSlice({
  name: 'math',
  initialState: {
    no:  0,
    name: 'increment'
  },
  reducers:{
    incre : (state) => {
      state.no += 1
    },
    decre : (state) => {
      state.no -= 1
    }
  }
})

export default Math.reducer
export const {incre, decre} = Math.actions