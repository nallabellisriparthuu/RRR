import React from 'react'

const Fruits = () => {
    let fruits = [
        {name: "Apple", price: 20, emoji: "🍎"},
        {name: "Bananna", price: 15, emoji: "🍌"},
        {name: "Cherry", price: 15, emoji: "🍒"},
        {name: "Dragon", price: 60, emoji: "🐲"},
        {name: "Kiwi", price: 30, emoji: "🥝"},
        {name: "Goa", price: 10, emoji: "🍏"},

    ]
  return (
    <div>
        <h3>
            <ul>
                {fruits.map((fruit)=>(
                    <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price}</li>
                ))}
            </ul>
        </h3>
    </div>
  )
}

export default Fruits