import React, { createContext } from 'react'
import { useState } from 'react'
import Container from './Container'

export const ThemeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState("Light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "dark" : "Light"));
  }
  return (
    <ThemeContext.Provider value = {{theme}}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>App compoent</h1>
      <Container  />
    </ThemeContext.Provider>
  )
}

export default App