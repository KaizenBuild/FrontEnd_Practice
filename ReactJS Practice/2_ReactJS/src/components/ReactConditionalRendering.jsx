import React from 'react'
import ReactIfStatement from './ReactIfStatement'
import ReactTernaryOperator from './ReactTernaryOperator'
import ReactAndAndOperator from './ReactAndAndOperator'

const ReactConditionalRendering = () => {
    return (
        <div>
            <p>In react, There are many ways for doing React Conditional Rendering.</p>
            <ul>
                {["if Statement", "Ternary Operator","Using && Operator","Using switch statement"].map((v, i) => {
                    return (<li key={i}>{v}</li>)
                })}
            </ul>

            <ul>
                <li><ReactIfStatement/></li> <br /> <hr />
                <li><ReactTernaryOperator/></li> <br /> <hr />
                <li><ReactAndAndOperator/></li> <br />
            </ul>
        </div>
    )
}

export default ReactConditionalRendering
