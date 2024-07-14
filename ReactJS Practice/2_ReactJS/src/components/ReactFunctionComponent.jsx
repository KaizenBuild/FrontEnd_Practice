import React from 'react'

const ReactFunctionComponent = () => {
    let comp = ["Function components are simple JavaScript functions that return JSX (JavaScript XML).", "They are used to define a component in React."]
    return (
        <div>
            <h3>Function Component</h3>
            <ul>
                {comp.map((v, i) => {
                    return (<li key={i}>{v}</li>)
                })}
            </ul>
        </div>
    )
}

export default ReactFunctionComponent
