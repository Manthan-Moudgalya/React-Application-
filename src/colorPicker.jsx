import React, { useState } from "react";
import "./ColorPicker.css"

export default function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <div className="color-display" style={{ backgroundColor :color }}>
            </div>
            <div className="input-block">
                <h3>Pick Color</h3>
                <input type="color" value={color} onChange={handleChangeColor} id="inp-color" />
            </div>
        </div>
    );
}

