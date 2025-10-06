import React from 'react'

const FruitMy = ({name, price, emoji, soldOut}) => {
  return (
    <li>
        {emoji} {name} {price} {soldOut ? "(soldOut)" : ""}
    </li>
  )
}

export default FruitMy