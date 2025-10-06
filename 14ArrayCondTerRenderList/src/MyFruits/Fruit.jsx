import React from 'react'

const Fruit = ({name, price, emoji}) => {
  return (
    <>
        
    {
        price >= 15 ? <li>{emoji} {name} {price}</li> : null
    }
    </>
  )
}

export default Fruit