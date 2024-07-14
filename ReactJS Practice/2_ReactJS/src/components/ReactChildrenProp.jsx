import React from 'react'

const ReactChildrenProp = ({children}) => {
    return (
        <div>
            <h3>Children Prop</h3>
            <ul>
                <li>The children prop in React is a special prop that allows you to pass child elements directly into a component.</li>
                <li>This is especially useful for components that wrap other components or elements.</li>
                <li>Here are some key points about the children prop:</li>
                <li>"c" in children must be in lower case</li>
            </ul>

            <p>Example of Children Prop - <b><i>{children}</i></b></p>
        </div>
    )
}

export default ReactChildrenProp
