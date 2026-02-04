import { createSlice } from "@reduxjs/toolkit";

export const Button = createSlice({
  name : 'task',
  initialState : {
    no : 0,
    name : "hello"
  },
  reducers : {
    incre : (state) => {
      state.no += 1
    },
    decre : (state, action) => {
      state.no -= action.payload
      // console.log(action.payload)
    }
  }
})

export default Button.reducer
export const {incre, decre} = Button.actions