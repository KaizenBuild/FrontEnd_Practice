import React from 'react'
import ReactChildrenProp from './ReactChildrenProp'

const ReactProps = ({name}) => {
    let def = ["props stands for properties.","Props are arguments passed into React components.","Sending data from parent component to child component with the help of attributes and properties.", "Props are like function arguments, and you send them into the component as attributes."]
    return (
        <div>
            <ul>
                {def.map((v, i) => {
                    return (<li key={i}>{v}</li>)
                })}
            </ul>

            <p>Example of prop(you can see the code) - <b><i> {name}</i></b></p> 
            
            <br />
            <ReactChildrenProp>Hey, I am Children</ReactChildrenProp>
        </div>
    )
}

export default ReactProps
