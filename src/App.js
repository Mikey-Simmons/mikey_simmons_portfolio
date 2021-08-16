import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import mikey1 from '../src/imgs/mikey.jpg'
import Typical from 'react-typical'



function App(props) {
  return (
    <div className="App">
      <div className="container">
        
        <div className="navbar">
      <Nav vertical>
        <NavItem>
          <NavLink href="#">About Me</NavLink>
        </NavItem>
        <br></br>
        <NavItem>
          <NavLink href="#">Projects</NavLink>
        </NavItem>
        <br></br>
        <NavItem>
          <NavLink href="#">Contact Me</NavLink>
        </NavItem>
        <br></br>
        <NavItem>
          <NavLink href="#">Resume</NavLink>
        </NavItem>
      </Nav>
      <hr/>
    </div> 
    <div className="animated_text">
      <Typical
      loop={Infinity}
     
      
      steps={[
        'Hello!',
        500,
        'My name is Michael Simmons!',
        300,
        "I am a Full-Stack Web Developer,",
        300,
        "Who specializes in Python, Java, and M.E.R.N.",
        300,
        "Please continue scrolling to learn more about me...",
        3000
        
      ]}
      >

      </Typical>
      </div>
    <div className="my_pic_and_cap">
    
    <img src= {mikey1}></img>
    
    </div>
    
    
    </div>
    <div className="content_container">
    <div className="contact_me">
      <h1 className="subject_header">Contact Me</h1>
      <h2 className="header" >Phone Number: (206)-468-1060</h2>
      <h2 className="header" >Email: mikeysimmons425@gmail.com </h2>
      <h2 className="header"><a href="https://www.linkedin.com/in/michael-a-simmons/">LinkedIn</a></h2>
    </div>
    <div  className="about_me">
      <h1 className="subject_header">About Me</h1>
      <p className="aboutme">I am a passionate web developer who loves learning new technologies and implementing them into real world solutions.  I am proficient in MERN, Python, and Java.   My curiosity has driven me to become a lifelong learner.    I started and finished an extremely difficult 14 week coding boot camp called Coding Dojo in the middle of the Covid-19 pandemic.  Although it was challenging, I proved to myself that I can strive under extremely difficult circumstances and I gained an insane amount of technical knowledge.  Having previously worked in sales, 
        I love to work with people and prefer working in a team like environment.
      </p>
    </div>
    <div className="projects">
      <h1 className="subject_header">Projects</h1>
    </div>
    <div className="resume">
      <h1 className="subject_header">Resume</h1>
      <iframe src="https://drive.google.com/file/d/1JDob__36vd9iZ-GXnZxzA9eZA5SQ2Uph/preview" width="750" height="950" allow="autoplay"></iframe>
    </div>
    </div>
    </div>
      
  );
}

export default App;
