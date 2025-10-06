import React from 'react'
import Friut from './Friut'
const Fruits = () => {
    let fruits = [
        {name: "Apple", price: 20, emoji: "🍎"},
        {name: "Bananna", price: 15, emoji: "🍌"},
        {name: "Cherry", price: 15, emoji: "🍒"},
        {name: "Dragon", price: 60, emoji: "🐲"},
        {name: "Kiwi", price: 30, emoji: "🥝"},
        {name: "Goa", price: 10, emoji: "🍏"}
    ]
  return (
    <div>
        <ul>
            {fruits.map((fruit)=>(
                <Friut key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
            ))}
        </ul>
    </div>
  )
}

export default Fruits