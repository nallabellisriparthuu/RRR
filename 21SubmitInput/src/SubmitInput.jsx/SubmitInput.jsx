import React from 'react'
import { useState } from 'react'

const SubmitInput = () => {
  let [name, setName] = useState({firstName: "", lastName: ""});
  function handleFirstName(e){
    setName({...name, firstName: e.target.value})
  }
  function handleSecondName(e){
    setName({...name, lastName: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("FormSubmit:",name)
    alert(`Form submited! Name: ${name.firstName} ${name.lastName}`)
  }
    return (
    <div>
        <input onChange={handleFirstName} type="text" placeholder='FirstName' value={name.firstName} />
        <input onChange={handleSecondName} type="text" placeholder='SecondName' value={name.lastName} />
        <h2>{name.firstName}-{name.lastName}</h2>
        <button onClick={handleSubmit}>Click</button>
    </div>
  )
}

export default SubmitInput