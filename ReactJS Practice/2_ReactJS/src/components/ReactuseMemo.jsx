import React, { useMemo, useState } from 'react'

const ReactuseMemo = () => {
    let def = [
        "The React useMemo Hook returns a memoized value.",
        "The useMemo hook in React is used to memoize expensive calculations so that they only run when their dependencies change, thereby optimizing performance.",
        "The useMemo Hook only runs when one of its dependencies update.",
        "This can improve performance.",
        "The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.",
        "The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.",
    ]


    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(100)

    const multiplication = useMemo(     //use memo
        function multiplication() {
            console.log("*********");
            return add * 10
        }, [add]
    )

    return (
        <div>
            <ul>
                {def.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <h4>Example of useMemo :-</h4> <br />

            <h4>Multiply value will be call here :- {multiplication}</h4>

            <button onClick={() => { setAdd(add + 1) }}>Increment</button> {add} <br />
            <button onClick={() => { setSub(sub - 1) }}>Decrement</button> {sub}
        </div>
    )
}

export default ReactuseMemo
