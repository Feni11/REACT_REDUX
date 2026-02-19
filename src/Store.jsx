import { configureStore } from "@reduxjs/toolkit";
import Button from "./ButtonSlice";
import themeColorSlice from "./ThemeSlice";
import Socialmedia from "./SocialmediaSlice";
import plus from "./PlusSlice";
import Math from './MathSlice'
import Math2 from './MathSlice2'
import Math3 from "./MathSlice3";
import Math4 from "./MathSlice4";
import CRUD from "./CRUD_Slice";
import CRUD_Pra from "./CRUD_Slice_Prac";

export default configureStore({
  reducer : {

    // Task : Button,
    // theme: themeColorSlice,
    // socialTask: Socialmedia,
    // plusTask : plus,
    // mathTask: Math
    // mathTask2: Math2
    // mathTask3 : Math3
    // mathTask4: Math4
    // CRUDTask: CRUD

    CRUD_Practice: CRUD_Pra 

  }
})