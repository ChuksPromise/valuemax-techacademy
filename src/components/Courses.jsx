import React from 'react'
import "../assets/css/App.css"
import htmlcss from "../assets/images/html-css.webp"
import jscourse from "../assets/images/modernjs.webp"
import backend from "../assets/images/backend.png"
import mobileapp from "../assets/images/mobile-app.jpg"
import python from "../assets/images/python.png"
import pythonMl from "../assets/images/python-ml.png"
import ai from "../assets/images/ai.png"
import devops from "../assets/images/devops.jpg"
import uiux from "../assets/images/uiux.png"
import cms from "../assets/images/cms.webp"
import dataAnal from "../assets/images/dataAnal.jpg"
import graghics from "../assets/images/graphics.jpg"
import digi from "../assets/images/digi.jpg"
import seo from "../assets/images/seo.png"
import sem from "../assets/images/sem.webp"
import email from "../assets/images/email.png"
import market from "../assets/images/market.jpg"
import basic from "../assets/images/basic.webp"
import { useState } from 'react'

const Courses = () => {
   const [isReadmore, setIsReadMore] = useState(false)

   const showMore = () =>{
      setIsReadMore(!isReadmore)
   }

  return (
    <div className='course-sec'  id="course">
      <div className='left-right'>
         <h1>
            Course Library
         </h1>
         <div className='inner'>
            {/* item 1 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={htmlcss} alt="html-css" />
                  </div>
                  <h2>
                     Front-End: Responsive Web Design
                  </h2>
                  <p id='showcontent'>
                     {!isReadmore ? 
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control.
                     The utmost goal here is to lead the student to building any 
                     responsive web interface/design that may come their way. Each 
                     student will be deploying their own application/web interface to demonstrate 
                     that learning has taken place.` :
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`
                     }
                  </p>
               </div>
               {/* <button onClick={showMore}>
                  {isReadmore ? "SEE LESS" : "READ MORE"}
               </button> */}
            </div>
            {/* item 2 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={jscourse} alt="html-css" />
                  </div>
                  <h2>
                     Front-End: Javascript and its Libraries
                  </h2>
                  <p>
                     {!isReadmore ?
                     `Javascript is one of the most popular programming languages by popular 
                     demand. This course will cover all the basic syntax of javascript, functions 
                     and classes, DOM Manipulation, form validation,JS properties and methods, 
                     working with time and date and debugging js code. We will also cover JS 
                     component design, conditional rendering, useState, useEffect and many more. 
                     The student will be led to building various front-end based JS applications 
                     to demonstrate that learning has indeed taken place` : 
                     `Javascript is one of the most popular programming languages by popular 
                     demand. This course will cover all the basic syntax of javascript, functions 
                     and classes, DOM Manipulation, form validation,JS ...`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 3 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={backend} alt="html-css" />
                  </div>
                  <h2>
                     Back-End Programming 
                  </h2>
                  <p>
                    {!isReadmore ? 
                    ` Server-side Programming uses database technologies and server-side scripting 
                     languages to create a dynamic website.
                     Note that knowledge of front-side web programming is a prerequisite for enrolling 
                     in the server-side class.
                     By taking this course, you will be able to create and manage server-based 
                     applications and API building using server scripting language.
                     To do this you are expected to pick any of: PHP | NODE.JS | PYTHON-DJANGO 
                     OR PHYTHON-FLASK and any of the following databases technology: MYSQL | POSTGRESQL | 
                     MONGODB. We will also learn:We will also learn:JSON, AJAX, API INTEGRATION.` : 
                     `Server-side Programming uses database technologies and server-side scripting 
                     languages to create a dynamic website.
                     Note that knowledge of front-side web programming is a prerequisite for enrolling 
                     in the server-side class....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 4 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={mobileapp} alt="html-css" />
                  </div>
                  <h2>
                     MOBILE APP PROGRAMMING
                  </h2>
                  <p>
                     {!isReadmore ? 
                     `Mobile development is about creating applications and other software for mobile devices, 
                     including tablets and smartphones. At Valuemax, we focus on a hybrid approach to mobile app 
                     development, using languages that work cross platform on both Andriod and IOS devices, as well 
                     as been able to host your app on Google Play Store and Apple App Store .
                     Please note that a good knowledge of front-end web app development is necessary 
                     before delving into mobile app development.
                     To accomplish this, students will pick any of the following language of developoment:
                     REACT NATIVE: Creating components, handling state, and using the built-in UI components, 
                     Navigation, styling and emulator.
                     IONIC FRAMEWORK: Navigation, styling, Adding native functionality.
                     FLUTTER: dart syntax, layout, widget, and state management.` : 
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
         </div>
         <div className='inner'>
            {/* item 5 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={python} alt="html-css" />
                  </div>
                  <h2>
                     BASIC PYTHON PROGRAMMING
                  </h2>
                  <p id='showcontent'>
                     {!isReadmore ? 
                     `At this stage,you will learn all the syntax of python programming, including variables and 
                     conditionals, looping and iteration, functions and classes,lambda and importing modules in 
                     python.
                     This will give you a strong foundation in the world of python for data science, artificial 
                     intelligence, and machine learning, back-end for web app programming, desktop application, 
                     and device programming` :
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`
                     }
                  </p>
               </div>
               {/* <button onClick={showMore}>
                  {isReadmore ? "SEE LESS" : "READ MORE"}
               </button> */}
            </div>
            {/* item 6 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={pythonMl} alt="html-css" />
                  </div>
                  <h2>
                     DATA SCIENCE | MACHINE LEARNING
                  </h2>
                  <p>
                     {!isReadmore ?
                     `At this stage, we will tailor your knowledge of python towards best practice in data science 
                     such as file handling, dataframe, data cleaning and formatting, Numpy, Pandas, Matplolip, 
                     Seaborn, Scipy, Statsmodel and Scikit-Learn, analyzing millions of data and building simpler 
                     applications with the knowledge gained, and train your model.*
                     (NB: Please note that the knowledge of basic python programming is required.)` : 
                     `Javascript is one of the most popular programming languages by popular 
                     demand. This course will cover all the basic syntax of javascript, functions 
                     and classes, DOM Manipulation, form validation,JS ...`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 7 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={ai} alt="html-css" />
                  </div>
                  <h2>
                     ARTIFICIAL INTELLIGENCE
                  </h2>
                  <p>
                    {!isReadmore ? 
                    `At this stage, we will cover four subfields in artificial intelligence namely: Natural 
                    Language Processing, speech recognition, machine translation, and text classification, Computer 
                    Vision, Deep Learning, Various ML,A.I libraries.
                     (NB: Please note that the knowledge of basic python programming is required).` : 
                     `Server-side Programming uses database technologies and server-side scripting 
                     languages to create a dynamic website.
                     Note that knowledge of front-side web programming is a prerequisite for enrolling 
                     in the server-side class....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 8 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={devops} alt="html-css"/>
                  </div>
                  <h2>
                     Devops/Cloud Computing
                  </h2>
                  <p>
                     {!isReadmore ? 
                     `` : 
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
         </div>

         <div className='inner'>
            {/* item 9 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={uiux} alt="html-css" />
                  </div>
                  <h2>
                     UI/UX
                  </h2>
                  <p id='showcontent'>
                     {!isReadmore ? 
                     `UI/UX design refers to the process of designing the user interface and user experince of a 
                     digital product,such as a website or mobile app. The goal of UI/UX dedign is to create a 
                     product that is easy to use, visually appealing and provide a positive user experience. UI/UX 
                     is that first thing to be done before a web app or mobile app developer start their work.
                     At the end of the training, you will be able to define the problem and target the audience 
                     for a design, create a wireframe and prototypes, design the user interface for web and mobile app, 
                     conduct user research and usability testing to improve the overll user exoerience of the product and 
                     create user personas, and understand user needs and behaviours.
                     This course will also cover the importance of accessibility and creating designs that are inclusive for all 
                     users. You will learn how to create designs that are responsive and and adaptable to different devices and screen sizes.
                     Tools of Trade: Adobe XD and Figma.` :
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`
                     }
                  </p>
               </div>
               {/* <button onClick={showMore}>
                  {isReadmore ? "SEE LESS" : "READ MORE"}
               </button> */}
            </div>
            {/* item 10 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={cms} alt="html-css" />
                  </div>
                  <h2>
                     CMS-BASED WEB DESIGNING
                  </h2>
                  <p>
                     {!isReadmore ?
                     `CMS stands for Content Management System. They are online software platform designed 
                     for creating, designing and maintaining websites, Web design encompasses various tasks 
                     such as webpage layout, content production, and web graphic design.
                     Design engaging and repsonsive landing pages and websites for organizations, businesses etc.
                     Design and efficiently manage blog website.
                     Develop e-commerce systems
                     Integrate client CMS program and data feeds into the websites
                     To achieve this, students will learn to use popular CMS platform such as Word Press, Joomia, 
                     Drupal, or Magento. They will also learn advanced plugin integration, domain and hosting management, 
                     and website management.` : 
                     `Javascript is one of the most popular programming languages by popular 
                     demand. This course will cover all the basic syntax of javascript, functions 
                     and classes, DOM Manipulation, form validation,JS ...`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 11 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={dataAnal} alt="html-css" />
                  </div>
                  <h2>
                     DATA ANALYSIS | BUSINESS ANALYSIS 
                  </h2>
                  <p>
                    {!isReadmore ? 
                    ` Data analysis is the process of examining, cleansing, transforming, and modelling data with the 
                    goal of discovering useful insight, informing conclusion, and supporting decision making . It involves the 
                    use oof statistical and analytical methods to understand patterns, terends, and relationships in data. The 
                    difference between data analysis and business analysis is tha t, while data analysis focuses on the data itself, 
                    business analysis focuses on using the data to address the business needs and problems.
                     Taking this course will enable you: Do project and research anlysis Design questionnaires and data modelling
                     Extract, analyze and interpret data from a range of sources Visualize your result using statistical charts
                     Turn raw data into meraningful information that organization can use to improve their business. The above will be achieved by learning:
                     FOR DATA ANALYSIS: Advanced Microsoft Excel and SPSS FOR BUSINESS ANALYSIS: Asvanced Microdoft Excel and Power BI
                     Please note that the knowledge of basic mathematical and statistical concepts is required to take this course..` : 
                     `Server-side Programming uses database technologies and server-side scripting 
                     languages to create a dynamic website.
                     Note that knowledge of front-side web programming is a prerequisite for enrolling 
                     in the server-side class....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 12 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={graghics} alt="html-css" />
                  </div>
                  <h2>
                     GRAPHIC DESIGN
                  </h2>
                  <p>
                     {!isReadmore ? 
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control.
                     The utmost goal here is to lead the student to building any 
                     responsive web interface/design that may come their way. Each 
                     student will be deploying their own application/web interface to demonstrate 
                     that learning has taken place.` : 
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
         </div>

         <div className='inner'>
            {/* item 13 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={digi} alt="html-css" />
                  </div>
                  <h2>
                     DIGITAL MARKETING: SOCIAL MEDIA
                  </h2>
                  <p id='showcontent'>
                     {!isReadmore ? 
                     `You will be able to create a strong social media profile, developing the best content 
                     strategy, audience analysis, Running social media campaigns, Measuring and analyszing 
                     social media metrics` :
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`
                     }
                  </p>
               </div>
               {/* <button onClick={showMore}>
                  {isReadmore ? "SEE LESS" : "READ MORE"}
               </button> */}
            </div>
            {/* item 14 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={seo} alt="html-css" />
                  </div>
                  <h2>
                     DIGITAL MARKETING: SEARCH ENGINE OPTIMIZATION
                  </h2>
                  <p>
                     {!isReadmore ?
                     `Learning Search Engine Optimaization will enable you to do Keyword research, Building 
                     backlink, do technical SEO, Measuring and anaysing SEO, avoiding common SEO mistakes.` : 
                     `Javascript is one of the most popular programming languages by popular 
                     demand. This course will cover all the basic syntax of javascript, functions 
                     and classes, DOM Manipulation, form validation,JS ...`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 15 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={sem} alt="html-css" />
                  </div>
                  <h2>
                     DIGITAL MARKETING: SEARCH ENGINE MARKETING (SEM)
                  </h2>
                  <p>
                    {!isReadmore ? 
                    `pay-per-click(PPC), Cost-per-impression(CPI), and cost-per-acquisition(CPA).` : 
                     `Server-side Programming uses database technologies and server-side scripting 
                     languages to create a dynamic website.
                     Note that knowledge of front-side web programming is a prerequisite for enrolling 
                     in the server-side class....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
            {/* item 16 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={email} alt="html-css" />
                  </div>
                  <h2>
                     DIGITAL MARKETING: EMAIL MARKETING
                  </h2>
                  <p>
                     {!isReadmore ? 
                     `Building a genuine email list, Creating email campaigns, Autonmation and Personalizaton, 
                     tools for measuring and analyzing email mareting, spam laws, A/B testing and trigger based 
                     email campaigns.` : 
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
         </div>

         <div className='inner'>
            {/* item 17 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={market} alt="html-css" />
                  </div>
                  <h2>
                     DIGITAL MARKETING: CONTENT MARKETING/BLOGGING
                  </h2>
                  <p id='showcontent'>
                     {!isReadmore ? 
                     `Target audience analysis, Content strategy and planning, Differnt Content creation, 
                     Content promotion and distribution.` :
                     `In this module, the student will be exposed to all the details 
                     of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, 
                     remote server management, Git and Github for version control....`
                     }
                  </p>
               </div>
               {/* <button onClick={showMore}>
                  {isReadmore ? "SEE LESS" : "READ MORE"}
               </button> */}
            </div>
            {/* item 18 */}
            <div className='eachitem'>
               <div className='innerscroll'>
                  <div className='forimg'>
                     <img src={basic} alt="html-css" />
                  </div>
                  <h2>
                     FOUNDATION COMPUTER TRAINING
                  </h2>
                  <p>
                     {!isReadmore ?
                     `This is where it all starts - laying a solid foundation of your knowledge of computer. The 
                     course will cover the fundamentals of computer hardware, operating systems, and common software 
                     application such as Microsoft Word, Excel, and Powerpoint. Additionally, students will learn 
                     about online tools and platforms for professional collaboration and communication. After 
                     completing the course, students will have solid foundation of computer skills that can that 
                     can be used in various industries and career paths.`: 
                     `Javascript is one of the most popular programming languages by popular 
                     demand. This course will cover all the basic syntax of javascript, functions 
                     and classes, DOM Manipulation, form validation,JS ...`}
                  </p>
               </div>
               {/* <button>
                  READ MORE
               </button> */}
            </div>
         </div>
      </div>
    </div>
  )
}

export default Courses