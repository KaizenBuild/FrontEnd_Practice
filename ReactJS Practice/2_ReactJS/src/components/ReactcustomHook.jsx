import React from 'react'

const ReactcustomHook = () => {
  let def = [
    "Hooks are reusable functions.",
    "Custom Hooks start with 'use'. Example: useFetch.",
    "A custom hook in React is a JavaScript function that starts with 'use' and can call other hooks. ",
    "Custom hooks let you extract and reuse stateful logic between components.",
    "we can build our own hook , according to our requirements",
  ]
  return (
    <div>
      <ul>
        {def.map((v, i) => <li key={i}>{v}</li>)}
      </ul>


    </div>
  )
}

export default ReactcustomHook
