import React, { useState, useEffect } from 'react';

export const Stw = () => {
    const [time, settime] = useState(0)
    const [start, setstart] = useState(false)

    useEffect(() => {
        let timer;
        if (start) {
            timer = setInterval(() => {
                settime(prevTime => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(timer);
    },[start]);
    //dependency array 
    function handleStart() {
        setstart(true)

    }
    function handlePause() {
        setstart(false)
    }
    function handleReset() {
        setstart(false)
        settime(0)
    }
    function formatTime() {
        let hours = Math.floor(time / (1000 * 60 * 60))
        let minutes = Math.floor(time / (1000 * 60) % 60)
        let seconds = Math.floor(time / (1000) % 60)
        let milliseconds = Math.floor((time % 1000) / 10)

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div className='mainwtc'>
            <h1 className='displaywatch'> {formatTime()} </h1>
            <div className='controls'>
                <button className="btnstr" onClick={handleStart}>Start</button>
                <button className="btnstr" onClick={handlePause} >Pause</button>
                <button className="btnstr" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

// Code

// bonus
// CSS
// bootstrap
