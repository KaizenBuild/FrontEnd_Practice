import React from 'react'

const ReactForms = () => {
    return (
        <div>
            <ul>
                <li>Just like in HTML, React uses forms to allow users to interact with the web page.</li>
            </ul>

            <h3>Adding Forms in React</h3>

            <ul>
                <li>Add a form that allows users to enter their name:-</li>

                <form action="">
                    <label >Enter your name:</label>
                    <input type="text" name="name" placeholder="Enter your name" />
                </form>

                <li><mark><i>This will work as normal, the form will submit and the page will refresh.</i></mark></li>
                <li>But this is generally not what we want to happen in React.</li>
                <li>We want to prevent this default behavior and let React control the form.</li>
            </ul>

            <h3><mark><b>Must be done after learning React hooks</b></mark></h3>
        </div>
    )
}

export default ReactForms
