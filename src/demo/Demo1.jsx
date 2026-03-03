import React, { useState } from 'react'

export default function Demo1() {
    // * Count is a state variable and setCount is a method to modify the count value
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count => Math.max(count - 1, 0));
        // * The setCount is function that is returned by useState and will take either state value as a parameter or a callback function but not both.
    }

    return (
        <div>
            <h2>Counter App</h2>
            COUNT = {count} <br /><br />
            <button onClick={increment}>Increment</button> <br /> <br />
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
