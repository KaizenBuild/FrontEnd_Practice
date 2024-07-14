import React from 'react'
import ReactClassComponent from './ReactClassComponent'
import ReactFunctionComponent from './ReactFunctionComponent'

const ReactComponents = () => {
    let comp = ["Components are independent and reusable bits of code.", "Components come in two types, <ol> <li>Class components</li> <li>Function components</li></ol>"]
  return (
    <div>
      <ul>
      {comp.map((value, index)=>{
        return(<li key={index} dangerouslySetInnerHTML={{ __html: value }}></li>)
      })}
      </ul>

      <ReactClassComponent/>
      <ReactFunctionComponent/>
    </div>
  )
}

export default ReactComponents
