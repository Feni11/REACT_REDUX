import { createSlice } from "@reduxjs/toolkit";

export const CRUD = createSlice({
  name: "crud",
  initialState: {
    list: [],
    init: {
      name: "",
    },
  },
  reducers: {
    addItems: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItems: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    editItems: (state, action) => {
      const { index, newValues } = action.payload;
      state.list[index] = newValues;
    }
  },
});
export default CRUD.reducer;
export const { addItems, deleteItems, editItems } = CRUD.actions;
