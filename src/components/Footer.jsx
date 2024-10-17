import React from 'react'
import "../assets/css/App.css"
import { 
  FaFacebook, 
  FaWhatsapp, 
  FaTwitter, 
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='left-right inner-footer'>

        {/* footer item 1 */}

        <div className='eachitem first-item'>
          <h1>
            Valuemax <span>TechAcademy</span>
          </h1>
          <p>
            Empowering Africa's Future through Cutting-Edge Technology
          </p>
          <div className='foricons'>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaWhatsapp/></a>
          </div>
        </div>

        {/* footer item 2 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>About Us </h1>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Hosting & Domain</a></li>
              <li><a href="#">Buy Data</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* footer item 3 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Programming</h1>
            <ul>
              <li><a href="#">Front-End Web Dev</a></li>
              <li><a href="#">Back-End Web Dev</a></li>
              <li><a href="#">Python Programming</a></li>
              <li><a href="#">Data Science & Machine Learning (M.L)</a></li>
              <li><a href="#">Data Analysis</a></li>
              <li><a href="#">Mobile App Dev</a></li>
              <li><a href="#">Desktop Application</a></li>
              <li><a href="#">Computer Networking</a></li>
              <li><a href="#">DevOps/Cloud Computing</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">Web 3: Blockchain Dev</a></li>
              <li><a href="#">Artificial Intelligence (A.I), Robotic, <br /> Automation, IOT & Embedded system</a></li>
            </ul>
          </div>
        </div>

        {/* footer item 4 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Non-Programming</h1>
            <ul>
              <li><a href="#">Foundation Computer Training</a></li>
              <li><a href="#">Professional Graphics and 3D Designs</a></li>
              <li><a href="#">Video Editing/ Motion Graphics, 3D Animation, and White Boarding</a></li>
              <li><a href="#">UI/UX</a></li>
              <li><a href="#">Auto card for Architectural Design</a></li>
              <li><a href="#">Sage & other Accounting Software</a></li>
              <li><a href="#">Artificial Intelligence apps/tools usage</a></li>
              <li><a href="#">CMS Based Web Design</a></li>
              <li><a href="#">Digital Marketing </a></li>
            </ul>
          </div>
        </div>

        {/* footer item 2 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Contact Us </h1>
            <p>
              30, Old Finbank Building: 
              Opp UI Post Office, 3rd Building after FCMB;
              UI Ojoo Road, Ibadan.
            </p>
            <p>
              Email: <a href="mailto:admin@valuemaxonline.com">admin@valuemaxonline.com</a>
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer