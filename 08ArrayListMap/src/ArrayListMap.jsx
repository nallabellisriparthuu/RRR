import React from 'react'

const ArrayListMap = () => {
  let fruits = ["Apple", "Mango", "Bananna", "Cherry"]
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit)=>(
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayListMap