import React from 'react'

const ReactAndAndOperator = () => {

  let isLoggedIn = true

  return (
    <div>
      <h3>React Logical && Operator</h3>
      <ul>
        <li>The && operator is a concise way to conditionally render elements.</li>
        <li>The && operator is a great way to conditionally render elements in React when you only need to render something if a condition is true. </li>
        <li>If the <b> condition is false, it simply doesn't render anything.</b></li>
        <li>after && we write only the true conditions, we don't write the false condition</li>
        <li><b><i>condition && True_Output</i></b></li>
      </ul>

      Example of React && Operator :- <b>{isLoggedIn && "Log In"}</b>

    </div>
  )
}

export default ReactAndAndOperator
