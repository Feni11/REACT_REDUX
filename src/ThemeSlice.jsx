import { createSlice } from "@reduxjs/toolkit";

export const themeColorSlice = createSlice({
  name: "ColorChange",
  initialState: {
    color: "pink",
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    }
  },
});

export default themeColorSlice.reducer;
export const { changeColor } = themeColorSlice.actions;