
import React, { memo } from 'react'



const Child = (props) => {
    const { childvalue, onIncreaseCount } = props
    console.log("Child component is rendering!!!")
    return (
        
        <div>
            Child component {childvalue.countChild}
           

                </div>
    )
}
export default memo(Child)