import React, { useState } from 'react'

function Rating() {
    const [star, setStar] = useState(0)
    const handleStar = () => {
        setStar(star+1)
    }
    const s = "*".repeat(star)
  return (
    <div>
        <h1>Rating : {s} </h1>
        <button onClick={handleStar}>add star</button>
    </div>
  )
}

export default Rating