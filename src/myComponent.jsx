import React,{ useState } from "react";

export default function MyComponent(){
    // const [name, setName] = useState("");
    // const [payment, setPayment] = useState("");
    // const [shipping, setShipping ] = useState("");
    // const handleInput = (event) => {
    //     setName(event.target.value);
    // }
    // const handlePayemnt = (e) => {
    //     setPayment(e.target.value);
    // }
    // const handleTransportion = (e) => {
    //     setShipping(e.target.value);
    // }
    
    return(
        <>
            {/* <input type="text" value={name} onChange={handleInput}  id="" /> */}
            {/* <select value={payment} onChange={handlePayemnt}>
                <option>Select Method</option>
                <option>UPI</option>
                <option>Rupay</option>
                <option>Master Card</option>
                <option>Visa</option>
            </select>
            
            <p>Payment: {payment}</p> */}

            {/* <label htmlFor="">
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleTransportion}
                />Pick Up
            </label>
            <br />

            <label htmlFor="">
                <input type="radio" value="Shipping" checked={shipping === "Shipping"}
                onChange={handleTransportion} />Shipping
            </label>

            <p>Transportion: {shipping}</p> */}
        </>
    )

}