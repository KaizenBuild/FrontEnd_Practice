import React from 'react'

const ReactAndAndOperator = () => {

  let isLoggedIn = true

  return (
    <div>
      <h3>React && Operator</h3>
      <ul>
        <li>The && operator is a concise way to conditionally render elements.</li>
        <li>The && operator is a great way to conditionally render elements in React when you only need to render something if a condition is true. If the condition is false, it simply doesn't render anything.</li>
        <li>after && we write only the true conditions, we don't write the falsee condition</li>
      </ul>

      Example of React && Operator :- <b>{isLoggedIn && "Log In"}</b>

    </div>
  )
}

export default ReactAndAndOperator
