
import React, { memo } from 'react'



const Child = (props) => {
    const { childvalue, onIncreaseCount } = props
    console.log("Child component is rendering!!!")
    return (
        
        <div>
           
        </div>
    )
}
export default memo(Child)