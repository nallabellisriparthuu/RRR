import React from 'react'

const Hello = (props) => {
  console.log(props.name, props.message, props.city);

    // Attempting to mutate props
  // props.name = "Jake";  // ❌ This will throw an error: Cannot assign to read-only property

    return (
    <div>
        <h1>{props.name} {props.message} {props.city}</h1>
    </div>
  )
}

export default Hello