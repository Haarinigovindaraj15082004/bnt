import React from 'react'
import { useParams } from 'react-router-dom'

const U = () => {
     const {username} = useParams()
  return (
    <div>
        <h1>User: {username}</h1>
    </div>
  )
}

export default U