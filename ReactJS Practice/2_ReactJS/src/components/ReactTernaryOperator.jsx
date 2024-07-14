import React from 'react'

const ReactTernaryOperator = () => {
    let isLoggedIn = true;

    function change(){
        isLoggedIn = !isLoggedIn;
        // This line will not re-render the component, just changes the variable value.
        // React does not re-render functional components without hooks or state updates.
        console.log(isLoggedIn);
    }
  return (
    <div>
      <h3>React Ternary Operator</h3>
      <p>The ternary operator is a concise way to conditionally render elements.</p>
    <br />

    {isLoggedIn ? <b>Sign in</b> : <b>Sign Out</b>}
    <button onClick={change}>Click to Toggle</button>
    <p><i><mark style={{background:"orange"}}>To Use this button we have to use <b>state</b>, But in console we can see the changes.</mark></i></p>
    <ul>
        <li><i><mark>This line will not re-render the component, just changes the variable value.</mark></i></li>
        <li><i><mark>React does not re-render functional components without hooks or state updates.</mark></i></li>
    </ul>
    </div>
  )
}

export default ReactTernaryOperator
