import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import React from 'react'
import User from "./Pages/User"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar"
import U from "./Pages/U"
import Error from "./Pages/Error"

function App() {

  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/users" element = {<User/>}/>
        <Route path ="/users/:username" element = {<U/>}/>
        <Route path ="/contact" element = {<Contact/>}/>
        <Route path ="/about" element = {<About/>}/>
        <Route path ="*" element = {<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App