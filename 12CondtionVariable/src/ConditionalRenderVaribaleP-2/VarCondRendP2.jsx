import React from 'react'

const VarCondRendP2 = () => {
    let message;
    let age = 15
  if(age >= 18){
    message=<h1>Right to vote</h1>
  }else{
    message=<h1>Not right to vote</h1>
  }
  return message
}

export default VarCondRendP2