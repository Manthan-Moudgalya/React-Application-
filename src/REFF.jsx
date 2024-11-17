import React, { useState, useRef, useEffect } from "react";

export default function useREFFPage() {
    const inpText = useRef(null);

    const [Text, setText] = useState("");

    const handleClick = () => {
        inpText.current.focus();
        inpText.current.style.backgroundColor = "yellow";
    }

    const handleChange = () => {
        setText(inpText.current.value)
    }

    useEffect(() => {
        console.log("Component has rendered!!");
    },[Text]);

    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number => number + 1);
        console.log(number);
        
    }
    
    return(
        <>
            <button  onClick={handleClick}>Click Me</button>
            <input ref={inpText} onChange={handleChange} />
            <p>Text above: {Text}</p>
            <button onClick={increment}>Another ONe</button>
        </>
    )
}

// export default function useREFFPage() {
//     // const name = useRef();

//     // const printName = () => {
//     //     console.log(name.current.value);
//     // }\

//     const [count, setCount] = useState(0);

//     // const ButtonClicked = () => {
//     //     setCount(count => count + 1);
//     // }

//     const ref = useRef(0);

//     const handleClick = () => {
//         setCount(c => c + 1)
//         ref.current++;
//         console.log(ref.current);
        
//     }

//     useEffect(() => {
//         console.log("Component has been rendered!!");
//     })
    
//     return(
//         <>
//             {/* <input type="text" ref={name}  placeholder="Enter Name" /> */}
//             {/* <button onClick={printName}>Submit</button> */}
//             <button onClick={handleClick}>Click Me</button>
//             <h1>Total Clicks {count} </h1>
//         </>
//     )
// }