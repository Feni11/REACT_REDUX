import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decre, incre } from './PlusSlice';

const PlusUI = () => {

  const data = useSelector((state) => state.plusTask.no)
  console.log(data);

  const UD = useDispatch()
  
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => UD(incre())}>+</button>
      <button onClick={() => UD(decre())}>-</button>
    </div>
  )
}

export default PlusUI
