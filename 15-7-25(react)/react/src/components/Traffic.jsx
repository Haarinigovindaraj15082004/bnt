import React, { useState, useEffect } from 'react'

function Traffic() {
    const [light, setLight] = useState("")
    useEffect(()=>{
        if (light === "red"){
            let timer = setTimeout(()=>{
                setLight = "red"
            },10000)
        }
        else if (light === "green"){
            let timer = setTimeout(()=>{
                setLight = "green"
            },15000)
        }
        else if (light === "yellow") {
            let timer = setTimeout(()=>{
                setLight = "yellow"
            },5000)
        }
    }, [light])
  return (
    <div>
        <button onClick={()=>{setLight("red")}}  style = {{backgroundColor: light==="red"? "red":"grey"}}>red</button>
        <button onClick={()=>{setLight("green")}} style = {{backgroundColor : light ==="green"?"green":"grey"}}>green</button>
        <button onClick={()=>{setLight("yellow")}} style = {{backgroundColor: light =="yellow" ? "yellow" : "grey"}}>yellow</button>
    </div>
  )
}

export default Traffic 
