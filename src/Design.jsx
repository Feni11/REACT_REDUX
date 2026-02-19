import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incre } from "./SocialmediaSlice";

const Design = () => {

  const data = useSelector((state) => state.socialTask.no);
  console.log(data);
  
  const UD = useDispatch();

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => UD(incre())}>+</button>
      <button>-</button>
    </div>
  );
};

export default Design;
