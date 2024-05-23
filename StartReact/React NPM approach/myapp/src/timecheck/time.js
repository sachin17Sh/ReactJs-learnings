import React, { useState, useEffect } from 'react';
export const Timechg = () => {
    let time = new Date().toLocaleTimeString()

    const [curtime, setcurtime] = useState(time)
    const updatetime = () => {
        time = new Date().toLocaleTimeString()
        setcurtime(time)
    }
    const [Pause, setPause] = useState();
    useEffect(() => {
        let timer = setInterval(() => {
            if (!Pause) {
                updatetime()
            }
        },);
        return () => clearInterval(timer);
    }, [Pause]);
    function pauseHandler() {
        setPause(!Pause)
    }
    return (
        <div className='main1'>
            <h1>Clock: {curtime}</h1>
            <button className="btn1" onClick={pauseHandler}  >{Pause ? 'Continue' : 'Pause'}</button>

        </div>
    )
}