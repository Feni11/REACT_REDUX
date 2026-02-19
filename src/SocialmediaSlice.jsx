import { createSlice } from "@reduxjs/toolkit"

export const Socialmedia = createSlice({
  name: 'socialMediaTask',
  initialState:{
    no: 0,
    name: "feni"
  },
  reducers:{
    incre : (state) =>{
      //action function
      state.no += 1 
    }

  }
})

export default Socialmedia.reducer
export const {incre} = Socialmedia.actions