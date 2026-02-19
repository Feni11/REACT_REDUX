import { createSlice } from "@reduxjs/toolkit";

export const CRUD_Pra = createSlice({
  name: 'CRUD',
  initialState:{
    list: [],
    init:{
      name: '',
      contactNo: '',
      image: null
    }
  },
  reducers:{
    addItems: (state, action) => {
      state.list.push(action.payload)
    },
    deleteItems: (state, action) => {
      state.list.splice(action.payload, 1)
    },  
    editItems: (state, action) => {
      const { index, newValues } = action.payload;
      state.list[index] = newValues
    }
  }
})

export default CRUD_Pra.reducer;
export const {addItems, deleteItems, editItems} = CRUD_Pra.actions