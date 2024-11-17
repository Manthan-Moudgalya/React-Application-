import React,{useState} from "react";
import './SSideBar.css';
import leftArrow from "../assets/icons8-left-arrow-64.png";
import rightArrow from "../assets/icons8-right-arrow-64.png";
import CreditCard from "../assets/credit-card-96.png"
import DebitCard from "../assets/debit-card-96.png"



function SSideBar(){
    const [isActive, setIsActive] = useState(false);


    const handleSideBar = () => {
        setIsActive((isActive) => isActive = !isActive);
        console.log(isActive);
    }


    return(
        <div className={`h-lvh ${isActive ? "w-[250px]" : "w-[80px]" } duration-700 bg-black flex
                        items-center flex-col absolute z-10 border-[0.5px] rounded-[5px] 
                        border-gray-500`}>

            <button className="h-100" onClick={handleSideBar}>
                <img src={`${isActive ? leftArrow : rightArrow}`} 
                className={`${isActive ? "h-[50px] w-[53px] cursor-pointer" : "h-[43px] w-[45px] "}`}
                alt="Arrow" />
            </button>

            <ul className="w-full">
                <li className={`mt-3 h-7 w-full p-6 rounded-[11px]
                                ${isActive? "cursor-pointer hover:bg-[rgb(69,69,69)]" : "hover:pointer-events-none cursor-default"}`}
                >

                    <img src={CreditCard} className="h-7 w-7 mr-2" alt="" />
                    <span className={`text-neutral-50 flex items-center justify-center 
                                    ${isActive ? 'cursor-pointer' : 'hidden'}`}>
                        Credit Card
                    </span>
                </li>

                <li className={`h-7 w-full p-6  rounded-[11px] ${isActive? "cursor-pointer hover:bg-[rgb(69,69,69)]" 
                                    :"hover:pointer-events-none cursor-default"}`}
                >
                <img src={DebitCard} className="h-8 w-8 mr-2" alt="" />
                    <span className={`text-neutral-50 flex items-center justify-center
                                        ${isActive ? 'flex' : 'hidden'}`}>
                        Debit Card
                    </span>
                </li>

            </ul>
        </div>
    );
}

export default SSideBar;