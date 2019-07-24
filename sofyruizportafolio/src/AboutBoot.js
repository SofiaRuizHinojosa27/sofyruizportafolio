import React, { Component } from "react";
import Profile from "./Sofi3.jpg";
import "./App.css";
import Zoom from "react-reveal/Zoom";

class AboutBoot extends Component {
  render() {
    return (
      <div className="conteiner-about" id="AboutBooot">
        <div className="row">
          <div className="col-md-6">
            <div className="about-content-left">
              <Zoom>
              <img className="imageAbout" src={Profile} alt="profile" />  
              </Zoom>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content-rigth">
              <h1>Acerca de mi</h1>
              <h4>
                Emprendedora de corazón, apasionada por el nuevo conocimiento,
                mi mayor motivación es crecer profesionalmente, y alcanzar la
                mejor versión de mí mediante la experiencia.
              </h4>
              <h4>
                Me gusta ver la vida con alegría y me entusiasma hacer una
                diferencia positiva con quienes me rodean.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBoot;
