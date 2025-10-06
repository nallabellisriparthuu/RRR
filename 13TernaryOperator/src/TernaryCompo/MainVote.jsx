import React from 'react'
import Vote from './Vote'
import VoteNo from './VoteNo'

const MainVote = () => {
    let age = 50
    return <div>
        {age >= 18 ? <Vote/> : <VoteNo/>}
    </div>
}

export default MainVote