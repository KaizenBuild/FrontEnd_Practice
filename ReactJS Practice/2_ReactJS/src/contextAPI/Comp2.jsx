import React, { useContext } from 'react'
import name from './Context'

const Comp2 = () => {
    const fname = useContext(name)
  return (
    <div>
      <h4>Hello, I'm {fname}</h4>
    </div>
  )
}

export default Comp2
