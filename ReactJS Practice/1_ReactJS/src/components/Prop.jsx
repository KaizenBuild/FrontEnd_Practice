import React from 'react'
import Pd from './Pd'
import PropDestructuring from './PropDestructuring'
import PropUserData from './PropUserData'

const Prop = () => {
  return (
    <div>
      <p>props stands for properties.</p>
      <p>Props are arguments passed into React components.</p>
      <p>we use <b>Props</b> for sending data from parent components to child component using props or attributes.</p>
        <ul>
            <li><h3>Passing Single value via Prop</h3></li>
            <Pd tech ="React Js"/> <br />
            <hr />


            <li><h3>Passing Multiple values via Prop and also using Destructuring.</h3></li> <br />
            <PropDestructuring fname="Rahul" lname="Singh" id={1} role="Web Developer" add="Haryana" /> <br />
            <hr />

            <li><h3>Importing large data and sending as an prop</h3></li>
            <PropUserData/>
        </ul>

    </div>
  )
}

export default Prop
