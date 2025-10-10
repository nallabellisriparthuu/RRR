import React from 'react'
import { useState } from 'react'

const Input = () => {
 let [search, setSearch] = useState("")
    return (
    <div>
        <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Enter name' value={search}/>   
        <h3>{search}</h3>   
    </div>
  )
}

export default Input