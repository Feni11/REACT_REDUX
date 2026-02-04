import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from './ThemeSlice';

const ThemeUi = () => {

  const currentColor = useSelector((state) => state.theme.color);

  const dispatch = useDispatch();

  // const TC = useDispatch();

  return (
    <div style={{ backgroundColor: currentColor, padding: '20px', transition: '0.3s' }}>
      
      <button onClick={() => dispatch(changeColor('skyblue'))}>
        Theme change
      </button>

      <button onClick={() => dispatch(changeColor('pink'))}>
        Reset to Pink
      </button>

    </div>
  );
};

export default ThemeUi;
