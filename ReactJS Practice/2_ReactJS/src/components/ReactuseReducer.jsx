import React from 'react'

const ReactuseReducer = () => {

    let def = [
        "The useReducer Hook is similar to the useState Hook.",
        "It allows for custom state logic.",
        "If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.",
        "It's similar to useState, but instead of directly updating the state, it uses a reducer function.",
        "The useReducer Hook returns the current stateand a dispatchmethod.",
        "Syntax: const [state, dispatch] = useReducer(reducer, initialState);",
        "Reducer Function: A function that takes the current state and an action, and returns the new state.",
        "Initial State: The initial state value.",
    ]
    return (
        <div>
            <ul>
                {def.map((v, i) => {
                    return <li key={i}>{v}</li>
                })}
                
            </ul>
        </div>
    )
}

export default ReactuseReducer
