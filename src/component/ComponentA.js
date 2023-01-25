import React, { useEffect, useMemo, useState } from "react";

export const ComponentA = () => {

    const [{ count, name }, setValues] = useState({ count: 0, name: "test" })

    setInterval(() => {
        setValues(currentValues => ({
            ...currentValues,
            count: currentValues.count + 1
            
        }))
    }, 10000)


    return (
        <div>
            <ComponentB count={count}></ComponentB>
            <ComponentC name={name}></ComponentC>
        </div>
    )
}

const ComponentB = ({ count }) => {
    console.log("Component B is rendered :" + count)
    return <h1>Hello , {count}</h1>;
}

const ComponentC = React.memo(({ name }) => {
    console.log("Component C is rendered :" + name)
    return <h1>Hello , {name}</h1>;
})
