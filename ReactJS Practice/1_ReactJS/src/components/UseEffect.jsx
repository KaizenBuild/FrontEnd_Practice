import React from 'react'
import UseEffectEg1 from './UseEffectEg1'

const UseEffect = () => {
  return (
    <div>
      <h3><u>useEffect()</u></h3>

      <section>
        <ul>
            <li>The <b><i>useEffect</i></b> Hook allows you to perform side effects in your components.</li>
            <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
            <li>useEffect accepts two arguments. The second argument is optional.</li>
            <li>Sure, here it is:- useEffect(function, dependency)</li>
            <li><b><i>useEffect code run twice because we use react.StrictMode in main file</i></b></li>
        </ul>
      </section>
      <section>
        <UseEffectEg1/>
      </section>
    </div>
  )
}

export default UseEffect
