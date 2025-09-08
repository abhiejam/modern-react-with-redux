import React, { useState } from 'react'

function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setCount(count + valueToAdd);
        setValueToAdd(0);
    };

    return (
        <div>
            <h1>Count is {count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input 
                    value={valueToAdd || ''} 
                    onChange={handleChange}
                    type="number"
                     />
                <button>Add it!</button>
            </form>
        </div>
    )
}

export default CounterPage
