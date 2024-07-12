import React from 'react'
import Fc from './Fc'
import Cs from './Cs'

const Comp = () => {
  return (
    <div>
      <p>Components are independent and reusable bits of code</p>
      <p>They are the small of codes which can be reusable again and again.</p>
      <h3>There are 2 types of Components - </h3>
      <ul>
        <li><h4>Functional Component</h4></li>
        <Fc />
        <li><h4>Class Component</h4></li>
        <Cs />
      </ul>

    </div>
  )
}

export default Comp
