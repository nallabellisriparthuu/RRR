import React from 'react'

const Ternanry = () => {
  let age = 17
    return (
    <div>
      {age >= 18 ? <h1>Eligible to Vote</h1> : <h1>Not Eligible to Vote</h1>}
    </div>
  )
}

export default Ternanry