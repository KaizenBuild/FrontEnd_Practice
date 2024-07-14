import React from 'react'

const ReactEvents = () => {

    const hello = ()=>{
        console.log("Hello");
    }

    const add=(a,b)=>{
        console.log(`Sum of ${a} and ${b} is ${a+b}`);
    }

    let def = ["Just like HTML DOM events, React can perform actions based on user events.", "React has the same events as HTML: click, change, mouseover etc.", "React events are written in camelCase syntax:- onClick instead of onclick.", "React event handlers are written inside curly braces:- onClick={shoot}  instead of onclick=shoot().", "When you pass an arguments/parameters inside function:- use arrow function.", "When you don't pass any arguments then :- use only variable name of function."]
  return (
        <div>
            <ul>
                {def.map((v, i) => {
                    return (<li key={i}>{v}</li>)
                })}
            </ul>

            <section>
                <h3>No Parameters</h3> <br />
                <button onClick={hello}>Click to - Hello</button>
            </section>

            <section>
                <h3>Passing Arguments</h3> <br />
                <button onClick={()=>{add(5,5)}}>Click to - Add(5,5)</button>
            </section>
        </div>
    )
}

export default ReactEvents
