import { createSlice } from "@reduxjs/toolkit";

export const Math2 = createSlice({
  name: 'Math',
  initialState: {
    no: 0,
    name: 'task'
  },
  reducers: {
    incre: (state) => {
      state.no += 1
    },
    decre: (state) => {
      state.no -= 1
    }
  }
}) 

export default Math2.reducer
export const {incre, decre} = Math2.actions