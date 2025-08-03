import React from 'react'

function Button({label, handleClick}) {
  return (
    <div>
        <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button