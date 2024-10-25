import React, { useState } from 'react'
import "../assets/css/App.css"
import logo from "../assets/images/logo44.png"
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
   const [isMobile, setIsMobile] = useState(false)

  return (
      <div className='headerSection'>
         <div className='header left-right'>
            <div className='forimg'>
               <img src={logo} />
            </div>
            <div className='forcollapse'>
               <button className='collapseBut' onClick={() => {setIsMobile(!isMobile)}}>
                  {isMobile ? <FaTimes/> : <FaBars/>}
               </button>
            </div>
            <ul className={isMobile ? 'nav-items-mobile' : 'nav-items'} onClick={()=> setIsMobile(false)}>
               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="#about">About</a>
               </li>
               <li>
                  <a href="/">Programs</a>
               </li>
               <li>
                  <a href="/">Courses</a>
               </li>
            </ul>
         </div>
      </div>
  )
}

export default Header