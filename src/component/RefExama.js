import { useRef } from "react";

import React from 'react'

export const RefExam = () => {
     const ref = useRef(0)

    const increment = ()=>{
        ref.current += 1
        console.log(`ref is changed ${ref.current} times`);
    }
    
  return (
     <div>
            <div>useRef Example</div>
            <button onClick={increment}>Increment</button>
        </div>
  )
}





