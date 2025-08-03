import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Usercard from './components/Usercard'
import Button from './components/Button'
import Counter from './components/Counter'
import Rating from './components/Rating'
import Traffic from './components/Traffic'

function App() {
  const greet = () => {
      alert("WElcome")
  }
  const time = () => {
      alert("time")
  }
  const bye = () => {
      alert("bye")
  }
  return (
    <>
      <Welcome name = "Haarini"/>
      <Usercard name="Hari" email="hari@gmail.com" phone="98566212"/>
      <div style={{display:'flex', justifyContent: "center"}}>
        <Button label="greet" handleClick = {greet}/>
        <Button label ="time" handleClick = {time}/>
        <Button label = "bye" handleClick = {bye}/>
      </div>
      <Counter/>
      <Rating/>
      <Traffic/>
    </>
  )
}

export default App
