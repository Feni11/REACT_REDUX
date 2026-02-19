import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decre, incre } from './MathSlice4'

const MathUI4 = () => {

  const data = useSelector(state => state.mathTask4.no)
  const UD = useDispatch()

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => UD(incre())}>+</button>
      <button onClick={() => UD(decre())}>-</button>
    </div>
  )
}

export default MathUI4
