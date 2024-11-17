import React, { useState } from "react";
import './Todo.css'

export default function ToDoList() {
    const [activities, setActivity] = useState([]);
    const [inputValue, SetInputValue] = useState("");

    const handleInput = () => {
        const trimmedValue = inputValue.trim();
        if(trimmedValue === ""){
            return;
        }
        document.getElementById("text-inp").value = "";

        SetInputValue("");
        setActivity([...activities,  { text: inputValue, struck: false} ])
    }

    const DeleteTask = (index) => {
        setActivity(activities.filter((_,i) => i !== index))
    }

    const StrikeOut = (index) => {
        setActivity(activities.map((ele, i) => {
            if(index === i){
              return {...ele, struck : !ele.struck }
            } 
            return ele;

        }))
    }

    const handleEnter = (e) => {
        if(e.key === "Enter"){
            handleInput(e.target.value)
        }
    }
 

    return(
        <div className="main-container">
            <div className="input-block">
                <label>Enter the Activity <br /><br />
                    <input type="text" onChange={(e) => SetInputValue(e.target.value)} 
                    onKeyDown={handleEnter}
                    id="text-inp" />
                </label>
            </div>
            <div className="display-activity">
                <ul> 
                    {activities.map((activity, index) => 
                        <div key={index} >
                            <input type="checkbox" onChange={() => StrikeOut(index)} />      
                            &nbsp;{activity.struck ? <strike>{activity.text}</strike>:activity.text} 
                            &nbsp;&nbsp;<button onClick={() => DeleteTask(index)}>Delete</button>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}