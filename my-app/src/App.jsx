import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from "react-redux"
function App() {
  let sele=useSelector(state=>state)
  let disp=useDispatch()

  return (
    <>
      {sele}
      <button onClick={()=>disp({type:"inc"})}>+</button>
      <button onClick={()=>disp({type:"dec"})}>-</button>
    </>
  )
}

export default App
