import React from 'react'

const DesHello = (props) => {
    let {name, message, place} = props
  return (
    <div>
        <h1>{name}</h1>
        <h1>{message} {place}</h1>
    </div>
  )
}

export default DesHello