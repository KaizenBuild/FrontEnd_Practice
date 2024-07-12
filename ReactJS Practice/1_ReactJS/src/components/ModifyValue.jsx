import React, { useState } from 'react'

const ModifyValue = () => {

  // we are using here STATES 

  // useState // Here we are using the useState Hook to keep track of the application state.

  let [value, setValue] = useState(0)

  function addValue() {
    setValue(value + 1);
  }

  // function subValue(){       // i write this code in-line in button
  //     setValue(value - 1);
  // }


  // -----------------------

  const [detail, setDetail] = useState({
    name: 'Kaizen',
    add: "New delhi"
  })

  let { name, add } = detail;


  // ----------------------------------------------------------------------------------------------

  // we cant use this, By using this , the value in console will change but the UI value will not change 

  // let value = 1;

  // function addValue() {
  //     console.log("clicked", value);
  //     value = value+1;
  // }
  // function subValue() {
  //     value = value-1;;
  //     console.log("clicked", value);
  // }


  return (
    <div>
      <h3><u>useState()</u></h3>

      <section>
        <p>useState() - allows us to add state to a functional component</p>
        <p><i>we are using the useState Hook to keep track of the application state.</i></p>
        <p>State generally refers to data or properties that need to be tracking in an application.</p>
      </section>

      <section>
        <p>To use the useState Hook, we first need to import it into our component.</p>
        <p>We initialize our state by calling useState in our function component.</p>
        <p><b>useState</b> accepts an initial state and returns two values:</p>
        <ul>
          <li>The current state.</li>
          <li>A function that updates the state.</li>
        </ul>
        <p>The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!</p>

      </section>

      <section>
        <h4><i>Modify Value</i></h4>
        <h4>Current value is {value}</h4>
        <button onClick={addValue}>Increment Value</button>
        <button onClick={() => { setValue(value - 1) }}>Decrement Value</button>
      </section>

      <hr />
      {/* <p>hello ny name is {detail.name}, and i am from {detail.add}.</p> */}
      {/* --------------------------- */}

      {/* object destructuring  */}
      <p>Hello ny name is {name}, and i am from {add}.</p>

    </div>
  )
}

export default ModifyValue
