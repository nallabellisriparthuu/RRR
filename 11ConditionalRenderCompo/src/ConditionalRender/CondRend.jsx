import React from 'react'

const CondRend = () => {
  let isLoggedIn = false;
  if(isLoggedIn){
    return (
        <div>
            <h1>Absent in office</h1>
        </div>
    )
  }else{
    return (
        <div>
            <h1>Present in office</h1>
        </div>
    )
  }
}

export default CondRend