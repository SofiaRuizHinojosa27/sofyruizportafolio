import React from "react";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import logo2 from "./logo2.jpg";
import "./App.css";
import NavBar from "./NavBar";
import AboutBoot from "./AboutBoot";
import Skills from "./Skills";
import Proyects from "./Proyects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Zoom>
      <img src={logo2} className="App-logo" alt="logo" />
      </Zoom>
      <AboutBoot/>
      <Skills />
      <Proyects />
      <Flip>
      <Contact/>
      </Flip>
    </div>
  );
}

export default App;