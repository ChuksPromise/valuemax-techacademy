import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./assets/css/App.css"
import aboutimg from "./assets/images/background5.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
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
      <div className='about-sec left-right'>
        <div className='inner-one'>
          <button>About Us </button>
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
          <img />
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
