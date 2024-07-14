import React from 'react'

const ReactHooks = () => {
  return (
    <div>
      <ul>
        <li>React Hooks are functions that let you use <b>state</b> and <b>other React features</b> without writing a class.</li>
        <li>they allow you to <b>manage state, handle side effects, and use context in functional components</b>.</li>
        <li>Hooks allow us to "hook" into React features such as state and lifecycle methods.</li>
        <li><i>You must import Hooks from react.</i></li>
      </ul>

      <h3>Hook Rules</h3> <br />
      <p>There are 3 rules for hooks:</p>
      <ul>
        <li>Hooks can only be called inside React function components.</li>
        <li>Hooks can only be called at the top level of a component.</li>
        <li>Hooks cannot be conditional</li>
      </ul>
    </div>
  )
}

export default ReactHooks
