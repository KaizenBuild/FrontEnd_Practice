import React from 'react'
import Main from '../contextAPI/Main'

const ReactuseContext = () => {
  return (
    <div>
      <ul>
        <li>React Context is a way to manage state globally.</li>
        <li><b><i>React context API allows you to easily access data at different level of the component tree, without passing prop to every level.</i></b></li>
        <li>It can be used together with the <b>useState</b> Hook to share state between deeply nested components more easily than with <b>useState</b> alone.</li>
        <ul>
            <h4>The Problem</h4>
            <li>State should be held by the highest parent component in the stack that requires access to the state.</li>
            <li>To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.</li>
            <li>To do this without Context, we will need to pass the state as "props" through each nested component. This is called <b>"prop drilling"</b>.</li>
        </ul>
        <ul>
          <h3>Steps for creating (overview)</h3>
          <li>Step 1: createcontext()</li>
          <li>Step 2: Provider</li>
          <li>Step 3: Consumer</li>
        </ul>
        <ul>
          <h3>Steps for creating <b>(Proper)</b></h3>
          <li>Step 1: Create a context file (e.g., context.js):</li>
          <li>Step 2: Update your Main component to use this context:</li>
          <li>Step 3: Use the context in Comp1:</li>
        </ul>
      </ul>

      <section>
        <Main/>
      </section>

    </div>
  )
}

export default ReactuseContext
