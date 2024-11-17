import React from "react";

export default function Button() {

    const handleClick = (e) => {
        e.target.style.display = "none";
    }
    
    return ( 
        <button onDoubleClick={(e) => handleClick(e)} type="submit">Click Me 😊</button>
    )

    // let count = 1;
    // const clicked = (name) => {
    //     if(count <= 3){
    //         console.log(`${name} clicke me ${count}`)
    //         count++;
    //     } else {
    //         console.log('Stop it');
            
    //     }
    // }


}


// import React, { useState } from "react";
// import PropTypes from "prop-types";


// export default function Button(props){

//     const[hover, setHover] = useState(false);

//     const ButtonStyle = {
//         height: "30px",
//         width: "120px",
//         borderRadius: "14px",
//         border: "0.5px",
//         transition: "all 0.5s ease",
//         backgroundColor: hover ? props.color : props.Hcolor,
//         cursor: hover ? "pointer" : "default" ,
//         transition: "all 0.4s ease",
//         border: "0.5px solid black"
//     }

//     return(
//         <button type="submit" style={ButtonStyle}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//         className="btn">
//             {props.text}
//         </button>
//     );
// }

// Button.propTypes = {
//     text: PropTypes.string,
//     Hcolor: PropTypes.string,
//     color: PropTypes.string,
// }

// Button.defaultProps = {
//     text: "Click Me",
//     Hcolor: "White",
//     color: "Green"
// }