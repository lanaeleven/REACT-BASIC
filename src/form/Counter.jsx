import {useState} from 'react';

export default function Counter() {
    let [counter, setCounter] = useState(0);

    function handelClick() {
        setCounter((dududu) => dududu + 1);
        setCounter((dududu) => dududu + 1);
        setCounter((dududu) => dududu + 1);
        console.log(counter);
    }


    return (
        <div>
        <button onClick={handelClick}>
            increment +3
        </button>
        <h2>{counter}</h2>
        </div>
    );
}