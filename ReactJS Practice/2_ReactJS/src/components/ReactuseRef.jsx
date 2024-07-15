import React, { useEffect, useRef, useState } from 'react';

const ReactuseRef = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
        console.log(`Rendering... value of renderCount is ${renderCount.current}`);
    });

    const definitions = [
        "The useRef hook in React is used to persist values between renders without causing a re-render when the value changes.",
        "It can be used to store a mutable value that does not cause a re-render when updated.",
        "It can be used to access a DOM element directly.",
        "It is often used to reference DOM elements or to hold mutable values that do not require re-rendering when updated."
    ];

    return (
        <div> 
            <ul>
                {definitions.map((definition, index) => (
                    <li key={index}>{definition}</li>
                ))}
            </ul>
            <p><b>Example of useRef Hook:- </b></p> 
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click +1</button>
        </div>
    );
};

export default ReactuseRef;
