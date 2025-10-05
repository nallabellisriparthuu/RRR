import React from 'react'

const FunDes = ({name, city, state, message}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{city} {state}</h2>
        <h2>{message}</h2>
    </div>
  )
}

export default FunDes