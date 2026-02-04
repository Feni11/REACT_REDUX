import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incre,decre } from './ButtonSlice';

const ButtonUi = () => {

  const data = useSelector(state  => state.Task.no)
  console.log(data);

  const UD = useDispatch()
  console.log(UD);
  
  
  return (
    <div>
      <h2>{data}</h2>
      <button onClick={() => UD(incre())}>Increment</button>
      <button onClick={() => UD(decre(1))}>Decrement</button>
    </div>
  )
}

export default ButtonUi