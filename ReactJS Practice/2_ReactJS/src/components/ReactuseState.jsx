import React from 'react'
import { useState } from 'react'

const ReactuseState = () => {

    const [color, setColor] = useState("Red")
    const [count, setCount] = useState(0)

    function decrement(){
        setCount(count - 1)
    }

  return (
    <div>
      <ul>
        <li>The React <b>useState</b> Hook allows us to track state in a function component.</li>
        <li>State generally refers to data or properties that need to be tracking in an application.</li>
        <li><b><i>useState allows us to add state to functional components.</i></b></li>
        <li>The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!</li>
        <li>useState accepts an initial state and returns two values:</li>
        <ul>
            <li>The current state.</li>
            <li>A function that updates the state.</li>
        </ul>
      </ul>

      <div>
        <h4>Example of UseState:</h4>
        <p>My favourite color is : {color}</p>
        <button onClick={()=>setColor("blue")}>Blue</button> <br />
        
        <p>You Clicked {count} times.</p>
        <button onClick={()=>setCount(count+1)}>Click +1</button>
        <button onClick={decrement}>Click -1</button>

      </div>
    </div>
  )
}

export default ReactuseState
