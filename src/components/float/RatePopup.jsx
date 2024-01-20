import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const RatePopup = () => {
  return (
<>
<div className="ratepop-up">
    <div className="ratepop-close">
       <p>x</p> 
    </div>
    <div className="ratepop-icon">
        <AiFillStar/>
       <p>Rate Your MP</p>
    </div>
</div>
</>  )
}

export default RatePopup