import React from 'react'
import PresentCompo from './PresentCompo'
import AbsentCompo from './AbsentCompo'

const MainCompo = () => {
  let isCame = false
  if(isCame){
    return (
        <PresentCompo/>
    )
  }else{
    return (
        <AbsentCompo/>
    )
  }
    
}

export default MainCompo