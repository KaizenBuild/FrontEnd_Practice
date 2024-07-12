import React from 'react'
import Basics from './components/Basics'
import Comp from './components/Comp'
import './style.css'
import Prop from './components/Prop'
import ChildrenProp from './components/ChildrenProp'
import Img from './components/Img'
import Eh from './components/Eh'
import Hooks from './components/Hooks'


const App = () => {
  return (
    <div>
      <h1>Hey, There - Let's start React.</h1>
      <ol>
        <li><h2>React Js Basics</h2></li>
        <Basics />
        <hr />


        <li><h2>React Js Components</h2></li>
        < Comp /> <br />
        <hr /> 


        <li><h2>React Js Props</h2></li>
        <Prop />
        <hr /> 


        <li><h2>React Js Children Prop</h2></li>
        <ChildrenProp />
        <hr />


        <li><h2>React Js Adding Images</h2></li>
          <h3>Steps to import Images :- </h3>
          <ul>
            <li>Step 1, create a folder named "images" in the src folder.</li>
            <li>Step 2, import images in the Component or that file <br /> <b><i>import house from '../images/house.jpg'</i></b></li>
            <li>step 3, Add img tag  <br /> <b> <i>&lt;img src=&#123;house&#125; alt="house" width="300" /&gt;</i> </b></li>
          </ul> <br />
        <Img />
        <hr /> 


        <li><h2>React Js Event Handling</h2></li>
        <Eh/>
        <hr /> 


        <li><h2>React Js Hooks</h2></li>
        <Hooks />
        <hr /> 


        <li><h2>React Js Conditional Rendering</h2></li>
        <hr /> 


        <li><h2>React Js Ternary Operator</h2></li>
        <hr />  


        <li><h2>React Js Module Style CSS</h2></li>
        <hr />  


        <li><h2>React Js Mini Projects</h2></li>
        <hr /> 


        <li><h2>React Js React Router Dom</h2></li>
        <hr /> 


        <li><h2>React Js Lists</h2></li>
        <hr /> 


        <li><h2>React Js Lists and Keys</h2></li>
        <hr />  


        <li><h2>React Js Forms</h2></li>
        <hr />  


      </ol>
    </div>
  )
}

export default App
