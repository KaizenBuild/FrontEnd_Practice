import React from 'react'

class ReactClassComponent extends React.Component {
    render() {
        let classcomp = ["A class component must include the extends React.Component statement.", "This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.", "The component also requires a render() method, this method returns HTML."]
        
        return <div>
            <h3>Class Component</h3>

            <ul>
                {classcomp.map((v, i) => {
                    return (<li key={i}>{v}</li>)
                })}
            </ul>
        </div>
    }
}

export default ReactClassComponent

