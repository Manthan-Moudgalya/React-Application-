import React, { useEffect, useRef, useState } from 'react';
import FaceBookIcon from '../assets/icons8-facebook.svg';
import TwitterIcon from '../assets/icons8-twitter.svg';
import InstagramIcon from '../assets/icons8-instagram.svg';
import './SideBar.css';


export default function SideBar() {

  const [isCollapsed, setIsCollapsed] = useState(true);

  // let isInitialRender = useRef(true);
  let sideBarRef = useRef();

  function handleSideBar() {
    setIsCollapsed(prevIsCollapsed  => !prevIsCollapsed );
  }


  useEffect(() => {
    if(!isCollapsed){
      sideBarRef.current.classList.add("side-bar-active");
      sideBarRef.current.classList.remove("side-bar-inactive");
    } else {
      sideBarRef.current.classList.add("side-bar-inactive");
      sideBarRef.current.classList.remove("side-bar-active");
    }

  }, [isCollapsed]);


    return(
      <>
        <div className="side-bar-inactive" ref={sideBarRef}>
            <div className="collapse">
              <button className='collapse-btn' onClick={handleSideBar}></button>
            </div>

            <div className="social-medias">

             <div className="social-medias">
                  <div className="social-media-ele">
                      <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/">
                          <img src={FaceBookIcon} className="icon" alt="Facebook" />
                          <span className="text">Facebook</span>
                      </a>
                  </div>
                  
                  <div className="social-media-ele">  
                      <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/">
                          <img src={InstagramIcon} className="icon" alt="Instagram" />
                          <span className="text">Instagram</span>
                      </a>
                  </div>
                  
                  <div className="social-media-ele">
                      <a target='_blank' rel="noopener noreferrer" href="https://www.x.com">
                          <img src={TwitterIcon} className="icon" alt="Twitter" />
                          <span className="text">Twitter</span>
                      </a>
                  </div>
              </div>
              
            </div>
        </div>
      </>
    )
}