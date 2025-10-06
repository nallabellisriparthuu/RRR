import React from 'react'
import FruitMy from './FruitMy'
const FruitMys = () => {
    let fruits = [
        {name: "Apple", price: 20, emoji: "🍎", soldOut: false},
        {name: "Bananna", price: 15, emoji: "🍌", soldOut: false },
        {name: "Cherry", price: 5, emoji: "🍒", soldOut: true},
        {name: "Kiwi", price: 60, emoji: "🍏" , soldOut: false},
        {name: "Pineapple", price: 25, emoji: "🍍", soldOut: true},
        {name: "Orange", price: 10, emoji: "🍊", soldOut: true},
    ]
    return (
    <ul>
        {fruits.map((fruit)=>(
            <FruitMy key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldOut={fruit.soldOut}/>
        ))}
    </ul>
  )
}

export default FruitMys