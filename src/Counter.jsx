import React, {useState} from "react";
import './Counter.css'

export default function Counter(){
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount(c =>c + 1)
        setCount(c =>c + 1)
        setCount(c =>c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="count-container">
            <p className="count-display">{count}</p>
            <div className="count-buttons">
                <button type="submit" onClick={decrement}>Decrement</button>
                <button type="submit" onClick={reset}>Reset</button>
                <button type="submit" onClick={increament}>Increment</button>
            </div>
        </div>
    )
}