import { useState } from "react";

export default function Counter({name}) {

    const [ count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Counter {name}: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
    
}