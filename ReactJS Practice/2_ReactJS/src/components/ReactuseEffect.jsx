import React, { useEffect, useState } from 'react'

const ReactuseEffect = () => {

    const [count, setCount] = useState(0)

    // -----------------------------------------------------------------------------------------------------
    // it is a counter, it runs infinite times

    // useEffect(() => {
    //     setTimeout(() => {
    //         // setCount((count)=>count<10 ? count+1 : count = 0)
    //         setCount((count) => count + 1)
    //     }, 1000)
    // });

    // -----------------------------------------------------------------------------------------------------
    // using dependencies [], in useeffect do that this useEffect(timer), dont runs infinite times 
    // It only runs when we change anything in ConvolverNode, or everytime when the page renderToStaticMarkup, automatically it does not work 


    // useEffect(()=>{
    //     setTimeout(()=>{
    //         // setCount((count)=>count<10 ? count+1 : count = 0)  //timer goes upto 10 then again come back to 0
    //         setCount((count)=>count+1)
    //     }, 1000)
    // },[]);

    // -----------------------------------------------------------------------------------------------------
    // Effect Cleanup
    // Clean up the timer at the end of the useEffect Hook:
    // #To clear the timer, we had to name it.

    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)
    //     return () => clearTimeout(timer)
    // }, []); 

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount((count)=>count+1)
        }, 1000)
        return ()=>clearTimeout(timer)
    }, [])

    // -----------------------------------------------------------------------------------------------------
    return (
        <div>
            <ul>
                <li>The <b>useEffect</b> Hook allows you to perform side effects in your components.</li>
                <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
                <li><b>useEffect</b> accepts two arguments. The second argument is optional.</li>
                <li><pre>useEffect(&lt;function&gt;, &lt;dependency&gt; )</pre></li>
                <li>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</li>
                <li>If we use dependencies empty array brackets, only run this effect on the initial render.</li>
            </ul>

            <h4>Create a timer using useEffect:-</h4> <br />
            {count} <br /> <br />

            <h4>Effect Cleanup</h4>
            <ul>
                <li>Some effects require cleanup to reduce memory leaks.</li>
                <li>Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.</li>
                <li>We do this by including a return function at the end of the useEffect Hook.</li>
            </ul>

            <p><b>Clean up the timer at the end of the useEffect Hook:</b></p>
            <p><b><i>To clear the timer, we had to name it.</i></b></p>
            
        </div>
    )
}

export default ReactuseEffect
