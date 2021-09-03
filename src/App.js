import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import mikey1 from '../src/imgs/mikey.jpg'
import Typical from 'react-typical'
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import home from "./homePage.js"
import about from "./aboutMe.js"
import contact from "./contactMe.js"
import resume from "./resume.js"
import tech from "./technologies.js"
import projects from "./Projects.js"
function App(props) {
  return (
    <div className="App">
      <Navbar />
        <Section
          title=""
          subtitle={home}
          dark={false}
          id="section1"
        />
        <Section
          title="About Me"
          subtitle={about}
          dark={true}
          id="section2"
        />
        <Section
          title="Projects"
          subtitle={projects}
          dark={false}
          id="section3"
        />
        <Section
          title="Contact"
          subtitle={contact}
          dark={true}
          id="section4"
        />
        <Section
          title="Technologies"
          subtitle={tech}
          dark={false}
          id="section5"
        />
        <Section
          title="Resumé"
          subtitle={resume}
          dark={true}
          id="section6"
        />
      
    </div>
      
  );
}

export default App;
