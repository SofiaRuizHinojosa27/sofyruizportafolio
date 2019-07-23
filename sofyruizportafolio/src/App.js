import React from "react";
import logo2 from "./logo2.jpg";
import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
// import Proyects from "./Proyects";
// import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>

      <img src={logo2} className="App-logo" alt="logo" />
      <About />
      <Skills />
      {/* <Proyects />
      <Contact /> */}
    </div>
  );
}

export default App;