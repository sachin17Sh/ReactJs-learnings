import React, { useState, useEffect } from 'react';

export const Stw = () => {
    const [time, settime] = useState(0)
    const [start, setstart] = useState(false)

    useEffect(() => {
        let timer;
        if (start) {
            timer = setInterval(() => {
                settime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer); 
    }, [start]);  //dependency array 
    

    return (
     <div className='main'>
        <h1>Stopwatch: {time} seconds</h1>
        <button className="btn" onClick={handleStart}>Start</button>
        <button className="btn" onClick={handlePause}>Pause</button>
        <button className="btn" onClick={handleReset}>Reset</button>
    </div>
    )
}