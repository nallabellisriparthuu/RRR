import React from 'react'
import { useState } from 'react'

const MulStatCount = () => {
  let [count, setCount] = useState(0);
  let [anotherCount, setAnotherCount] = useState(1)

  function increment(){
    setCount(count + anotherCount)
  }
  function decrement(){
    setCount(count - anotherCount)
  }

  function anotherInc(){
    setAnotherCount(anotherCount + 1)
  }
  function anotherDec(){
    setAnotherCount(anotherCount - 1)
  }
    return (
    <div>
        <h1>The count Value: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>The count whcih we want to Inc/Dec for main count: {anotherCount}</h1>
        <button onClick={anotherInc}>Another Increment</button>
        <button onClick={anotherDec}>Another Decrement</button>
    </div>
  )
}

export default MulStatCount