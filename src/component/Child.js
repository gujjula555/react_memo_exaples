
import React, { memo } from 'react'



const Child = (props) => {
    const { childvalue, onIncreaseCount } = props
    console.log("Child component is rendering!!!")
    return (
        
        <div>
            Child component {childvalue.countChild}
            <button type="button" onClick={onIncreaseCount}>Child button</button>
        </div>
    )
}
export default memo(Child)