import React from 'react'
import name from './Context'
import Comp1 from './Comp1'

const Main = () => {
  return (
    <div>
      <name.Provider value={"Kaizen"}>
        <Comp1/>
      </name.Provider>
    </div>
  )
}

export default Main
