import React from 'react'
import "../assets/css/App.css"
import logo from "../assets/images/logo44.png"

const Header = () => {

  return (
      <div className='headerSection'>
         <div className='header left-right'>
            <div className='forimg'>
               <img src={logo} />
            </div>
            <ul>
               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="/">About</a>
               </li>
               <li>
                  <a href="/">Programs</a>
               </li>
               <li>
                  <a href="/">Courses</a>
               </li>
            </ul>
            {/* <div>
               <input type="search" />
            </div> */}
         </div>
      </div>
  )
}

export default Header