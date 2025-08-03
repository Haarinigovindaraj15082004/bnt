import React from 'react'

function Usercard({name, email, phone}) {
  return (
    <div>
        <h1>Name : {name}</h1>
        <p>email : {email}</p>
        <p>phone : {phone}</p>
    </div>
  )
}

export default Usercard