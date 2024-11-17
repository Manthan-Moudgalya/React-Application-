import React from "react";
import './MainSection.css'
import RuPay from '../assets/rupay.svg'
import Chip from '../assets/chip.png'


function MainSection(){

    return(
        <div className="main-section">
        <section>
            <div className="card-container">
                <div className="card">
                    <div className="front"> 
                       
                        <header className="flex items-center justify-between">
                            <div className="flex p-[10px] m-[10px] w-full justify-between">
                                <img src={RuPay} className="w-[130px]" alt="Rupay" />
                                <img src={Chip} className="w-[60px]  " alt="" />
                            </div>
                        </header>

                        <div className="card-details">
                            <div className="p-[10px] m-[10px]">
                                <h6 className="text-base font-light">Card Number</h6>
                                <h5 className="text-[1.3em] font-semibold">5090 1290 2375 9850</h5>
                                <h5 className="text-[20px] font-normal mt-[10px]">Manthan</h5>
                            </div>
                            <div className="p-[10px] m-[10px]">
                                <h6 className="text-[15px]">Valid Thru</h6>
                                <h5 className="text-[24px] font-medium">5/26</h5>
                            </div>
                        </div>
                    </div>

                    <div className="back">
                  
                        <div className="text-[13px] flex justify-center items-center p-[10px] ">
                            Call toll free number 0821-0891274
                        </div>
                        <div className="bg-black w-full h-[50px]"></div>
                        <div className="signature">
                            <div className="cvv">CVV</div>
                        </div>

                        <div className="text-msg">The contact information is strategically placed on the back of the card so that its easily accessible to the cardholder in case of emergencies. Its also a secure way to ensure that cardholders always have a reliable contact point to manage their account safely.
                        </div> 
                    </div>

                </div>
            </div>
        </section>
        </div>
    )
}

export default MainSection;