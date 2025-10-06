import React from 'react'

const Person = ({userName}) => {
  return (
    <div>
        <h1>{userName.name} {userName.age} {userName.jobrole} {userName.city}</h1>
    </div>
  )
}

export default Person