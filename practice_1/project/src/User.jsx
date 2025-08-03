import React, { useContext } from 'react'
import { ThemeContext } from './App';

const User = () => {

    const {theme} = useContext(ThemeContext)

    const textStyle = {
        backgroundColor : theme === "Light" ? "white" : "black",
        color : theme === "Light" ? "black" : "white"
    }
    console.log("User received theme:", theme);
  return (
    <div>
        <h1 style={textStyle}>User component</h1>
    </div>
  )
}

export default User