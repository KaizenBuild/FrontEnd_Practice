import React from 'react'
import UseRefEg1 from './UseRefEg1'

const Useref = () => {
  return (
    <div>
      <h3><u>useRef() Hook</u></h3>
      <section>
        <ul>
            <li>The <b><i>useRef</i></b> hook allows you to persist values between renders.</li>
            <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
            <li>It can be used to access a DOM element directly.</li>
        </ul>
      </section>


      <UseRefEg1 />
    </div>
  )
}

export default Useref
