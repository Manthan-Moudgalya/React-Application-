import React, {useEffect, useState, useRef} from "react";
import './Timer.css'


export default function Timer() {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            },100);
        }

        return(() => {
            clearInterval(intervalIdRef.current);
        })

    },[isRunning])

    function start () {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formateTime() {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <div className="time-container">
            <span className="time-display">{formateTime()}</span>
            <div className="manage-buttons">
                <button className="start" onClick={start}>Start</button>
                <button className="reset" onClick={reset}>Reset</button>
                <button className="stop" onClick={stop}>Stop</button>
            </div>
        </div>
    )
}