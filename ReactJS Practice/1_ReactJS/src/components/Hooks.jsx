import React from 'react'
import ModifyValue from './ModifyValue'
import UseEffect from './UseEffect'
import Useref from './Useref'

const Hooks = () => {
  return (
    <div>
        <ul>
            <li>React Hooks make it easier to use state and other react features in functional components.</li>
            <li>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</li>
            <li>Hooks allow us to "hook" into React features such as state and lifecycle methods.</li>
        </ul>
        <h2>Types of Hooks:-</h2>
        <ul>
        {/* useState() */}
          
          <li> <ModifyValue/> </li>  
          <hr />
           
          <li> <UseEffect/></li>
          <hr />

          <li><h3><u>useLayoutEffect() Hook</u></h3></li>
          <hr />


          <li><Useref /></li>
          
          <hr />


          <li><h3><u>useContect() Hook</u></h3></li>
          <hr />


          <li><h3><u>useReducer() Hook</u></h3></li>
          <hr />


          <li><h3><u>useMemo Hook()</u></h3></li>
          <hr />


          <li><h3><u>useCallback() Hook</u></h3></li>
          <hr />


          <li><h3><u>useState()</u></h3></li>
          <hr />






        </ul>

    </div>
  )
}

export default Hooks
