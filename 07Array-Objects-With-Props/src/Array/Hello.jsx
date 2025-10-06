import React from 'react'

const Hello = (props) => {
  return (
    <div>
        <h1>{props.name} {props.age} {props.city} {props.seatNumber}</h1>
    </div>
  )
}

export default Hello