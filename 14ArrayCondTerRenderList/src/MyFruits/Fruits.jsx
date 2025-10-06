import React from 'react'
import Fruit from './Fruit'

const Fruits = () => {
    let fruits = [
        {name: "Apple", price: 20, emoji: "🍎"},
        {name: "Bananna", price: 15, emoji: "🍌"},
        {name: "Cherry", price: 5, emoji: "🍒"},
        {name: "Kiwi", price: 60, emoji: "🍏"},
        {name: "Pineapple", price: 25, emoji: "🍍"},
        {name: "Orange", price: 10, emoji: "🍊"},
    ]
    return (
    <div>
        <ul>
            {fruits.map((fruit)=>(
                <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji}/>
            ))}
        </ul>
    </div>
  )
}

export default Fruits