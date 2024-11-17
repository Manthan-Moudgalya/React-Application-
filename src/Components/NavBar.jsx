import React, { useEffect, useRef, useState } from 'react';
import CredLogo from '../assets/CRED.png'
import './NavBar.css'

export default function NavBar(){
    return(
        <>
            <nav className="navigation">
                <div className="logo-container">
                    <img className='logo' src={CredLogo} alt="" />
                </div>
                <div className="nav-items">
                    <div className="nav-ele">Home</div>
                    <div className="nav-ele">About</div>
                    <div className="nav-ele">Service</div>
                </div>
            </nav>
        
        </>
    )
}