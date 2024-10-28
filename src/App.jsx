import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./assets/css/App.css"
import aboutimg from "./assets/images/background5.jpeg"
import vision from "./assets/images/vision 3.jpg";
import mission from "./assets/images/mission.jpg";
import { FaRegDotCircle } from "react-icons/fa";

function App() {

  return (
    <>
      <Header />
      {/* hero section */}
      <div className='hero'>
        <div className='left-right'>
          <h1>
            Welcome to Valuemax TechAcademy
          </h1>
          <p>
            Empowering Africa's Future through Cutting-Edge Technology
          </p>
        </div>
      </div>

      {/* about section */}
      <div className='about-sec left-right' id='about'>
        <div className='inner-one'>
          <div className='heads'> 
              <h1>
                About Us
              </h1>
          </div>
          {/* <button>About Us </button> */}
          <p>
            ValueMax TechAcademy is a pioneering institution dedicated to bridging 
            the tech skills gap in Africa. We believe that the continent's unique 
            challenges require homegrown solutions, crafted by individuals who 
            understand the local context.
          </p>
        </div>
        <div className='inner-two'>
          <div className='imagesection'>
            <img src={aboutimg} alt="about-img"/>
          </div>
        </div>
      </div>

      {/* VISION SECTION */}
      <div className='vision-sec'>
        <div className='left-right'>
          <div className='inner-one'>
            <div className='heads'> 
              <h1>
                Our Vision
              </h1>
            </div>
            <h2>
              Valuemax-TechAcademy
            </h2>
            <p>
              A continent where technology fuels innovation, entrepreneurship, 
              and sustainable development. Where African problems are solved by 
              African minds, using African solutions.
            </p>
          </div>
          <div className='inner-two'>
            <img src={vision} alt="" />
          </div>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className='misson-sec'>
        <div className='left-right'> 
          <div className='inner-one'>
            <div className='heads'> 
                <h1>
                  Our Mission
                </h1>
            </div>
            <p>
              At ValueMax TechAcademy, we're driven by a singular purpose: to 
              nurture and equip the next generation of tech leaders who will 
              harness the power of cutting-edge technology to tackle Africa's 
              most pressing challenges.
            </p>
          </div>
          <div className='inner-two'>
            <div className='imagesection'>
              <img src={mission} alt="about-img"/>
            </div>
          </div>
        </div>
      </div>

      {/* HWY CHOOSE US AND PROGRAMS SECTION */}
      <div className='program-sec' id='program'>
        <div className="left-right">
          <div className='inner-one'>
            <h1>
              Our Programs
            </h1>
            <ul>
              <li> <FaRegDotCircle className='fa'/>
                Cutting-edge tech training programs </li>
              <li> <FaRegDotCircle className='fa'/>
                Mentorship and coaching from industry experts</li>
              <li> <FaRegDotCircle className='fa'/>
                Project-based learning, focusing on Africa-centric problem-solving</li>
              <li> <FaRegDotCircle className='fa'/>
                Collaboration with industry partners to ensure relevance and applicability</li>
            </ul>
          </div>
          <div className='inner-two'>
            <h1>
              Why Choose ValueMax TechAcademy
            </h1>
            <ul>
              <li> <FaRegDotCircle className='fa'/>
                Industry-relevant curriculum</li>
              <li> <FaRegDotCircle className='fa'/>
                Expert instructors with real-world experience</li>
              <li> <FaRegDotCircle className='fa'/>
                State-of-the-art facilities and resources</li>
              <li> <FaRegDotCircle className='fa'/>
                Network opportunities with like-minded professionals</li>
              <li> <FaRegDotCircle className='fa'/>
                Career support and placement assistance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CERTIFICATE SECTION */}

      <div className='certificate-sec'>
        <div className='left-right'>
          <h1>
            Verify Past Students' Certificates
          </h1>
          <p>
            You can verify the certificate of all our past students 
            here using the student number on the certificate presented.
          </p>
          <form >
            <div className='inner-div'>
              <input type="text" />
              <button>
                VERIFY NOW!
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Movement Section */}
      <div className='movement-section'>
        <div className='left-right'> 
          <h1>
              Join the Movement
          </h1>
          <p>
              Be part of the revolution shaping Africa's tech landscape. 
              Apply now to our programs, and let's empower the continent, one 
              tech leader at a time.
          </p>
          <h2>
              Get In Touch
          </h2>
          <p>
              Contact Us: <a href={"mailto: onehpromie@gmail.com"}>valuemaxonline@gmail.com</a>
          </p>
          </div>            
        </div>

      <Footer/>
    </>
  )
}

export default App
