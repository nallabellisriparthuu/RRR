import React from 'react'

const Friut = ({name, price, emoji}) => {
  return (
    <li>
        {emoji} {name} {price}
    </li>
  )
}

export default Friut