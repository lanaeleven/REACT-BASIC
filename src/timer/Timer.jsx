import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const [pause, setPause] = useState(null);
    const [condition, setCondition] = useState('not-start');

    const timer = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());
        setCondition('running');

        timer.current = setInterval(() => {
            setNow(Date.now())
        }, 10);
    }

    function handlePause() {
        clearInterval(timer.current);
        setCondition('pause')
    }

    function handleStartAgain() {
        timer.current = setInterval(() => {
            setNow(Date.now())
        }, 10);
        setCondition('running')
    }

    function handleStop() {
        setCondition('not-start')
        setStart(null);
        setNow(null);

    }

    let component = null;

    if (condition === 'not-start') {
        component = <button onClick={handleStart}>Start</button>
    } else if (condition === 'running') {
        component = <button onClick={handlePause}>Pause</button>
    }else if (condition === 'pause'){
        component = <>
            <button onClick={handleStartAgain}>Resume</button>
            <button onClick={handleStop}>Stop</button>
        </>
    }



    
    return(
        <>
            <h1>Time: {now - start} ms</h1>
            
            {component}
            
        </>
    );
}