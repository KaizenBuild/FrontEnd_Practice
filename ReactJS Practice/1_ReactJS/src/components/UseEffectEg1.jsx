import React, { useEffect, useReducer, useState } from 'react'

const UseEffectEg1 = () => {

    // CASE 1 : TUN ON EVERY RENDER 

    // useEffect(()=>{
    //     alert("I am with out dependencies so i run in every render")
    // })


    // ----------------------------------------------------------------------------


    // CASE 2 : RUN ONLY ON FIRST RENDER 
    
    // -------------automatic reload  when page reload 

    // useEffect(()=>{
    //     console.log("times");
    //     alert("This is made by using useEffect")
    // },[])                // run when we refresh the browser

    // --------------------------------------------------------------------------

    // -------------count example
    const [count, setCount] = useState(0)

    function addValue() {
        setCount(count + 1)
    }

    useEffect(() => {
        alert(`Example of use Effect,

Changing value of count to  :- ${count}`)
    }, [count])             // code run when count value is changing


    return (
        <div>
            <h4>Example of useEffect : -</h4>
            <ul>
                <li>When page reloads automatic a alert box will appear - code is commented right now</li> <br />
                <li><button onClick={addValue}>Click to count :  {count}</button></li>
            </ul>

        </div>
    )
}

export default UseEffectEg1
