import React from 'react'
import Cp from './Cp'

const ChildrenProp = () => {
    return (
        <div>
            <ul>
                <li><b>Children</b> prop is a special prop that allows components to pass elements, components, or text directly into their output.</li>
                <li>When you write in between open and close tag of the component then it become the <b><i>children</i></b> prop.</li>
                <li>It's used when you want to include content between the opening and closing tags of a component in JSX.</li>
            </ul> <br />
            <Cp >
                <i><b>I am Children</b></i>
            </Cp>
        </div>
    )
}

export default ChildrenProp
