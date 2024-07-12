import React from 'react'

const Eh = () => {

    // no parameters 

    const displayData = () => {
        alert("Hi I am Event with No Parameter")
    }

    // with parameters 

    function addData(a, b) {
        console.log(a + b);
    }


    return (
        <div>
            <ul>
                <li>Event handling in React means performing some tasks while clicking, hovering or on other coditions just like we do in HTml DOM.</li>


                <li><h3><i>Events with no Parameters</i></h3></li>

                <button onClick={displayData}>Click me : I am Event with No Parameter - Pop up message will come</button> <br />



                <li><h3><i>Events with Parameters</i></h3></li>
                <ul>
                    <li>When using event handlers in React and needing to pass parameters, it's common to use an inline arrow function inside the onClick attribute. </li>
                    <li>However, it's not mandatory to use an arrow function; you can also use other techniques like bind.</li>
                </ul> <br />

                <button onClick={() => { addData(10, 5) }}>Click me : I am Event with Parameters - See inside console</button>
            </ul>

        </div>
    )
}

export default Eh
