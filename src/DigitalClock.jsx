import React, { useState, useEffect } from "react"
import './DigitalClock.css'
export default function  DigitalClock() {

    const [time, setTime] = useState(new Date);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(time);

    },[])

    const displayTime = () => {
        
        let hours = time.getHours().toString()
        const minutes = time.getMinutes().toString().padStart(2,'0')
        const seconds = time.getSeconds().toString().padStart(2,'0')
        const meridium = hours > 12 ? "PM" : "AM" 
        hours = (hours > 12) ? hours % 12 : hours;

        return `${hours}:${minutes}:${seconds}  ${meridium}`;
    }

    return(
        <>
            <div className="clock-container">
                <div className="clock-border">
                    <span className="display-time">
                        {displayTime()}
                    </span>
                </div>
            </div>
        
        </>
    )
}

