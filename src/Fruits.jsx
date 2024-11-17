import React, { useState } from 'react'

function Fruits(props) {
    const [fruits, setFruits] = useState(props.list);

    function handleAddInput () {
        const foodItem = document.getElementById("FoodAdd").value;
        document.getElementById("FoodAdd").value = "";
        
        setFruits(f => [...f, foodItem])
        console.log(fruits);

    }

    const handleDeleteInput = () => {
        const delItem = document.getElementById('FoodDel').value;
        document.getElementById('FoodDel').value = "";
        setFruits(fruits.filter((Item) => Item !== delItem ))
    }

    return(
        <div className='fruits-display'>
            <h2>List of Fruits</h2>

            <ul>{
                    fruits.map((fruit, index) => 
                        <li key={index}>{fruit}</li>
                    )
                }
            </ul>

            <label>
                <input type="text" placeholder='Enter Item' id='FoodAdd' />
                <button type="submit" onClick={handleAddInput}>Add Item </button>
            </label>
                <br />
            <label>
                <input type="text" placeholder='Enter Item' id='FoodDel'/> 
                <button type="submit" onClick={handleDeleteInput}>Delete Item </button>
            </label>
        </div>
    );
}

export default Fruits;