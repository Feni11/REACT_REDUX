import { configureStore } from "@reduxjs/toolkit";
import Button from "./ButtonSlice";
import themeColorSlice from "./ThemeSlice";

export default configureStore({
  reducer : {
    Task : Button,
    theme: themeColorSlice
  }
})
