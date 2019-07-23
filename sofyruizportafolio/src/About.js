import React, { Component } from "react";
import Profile from "./Sofi3.jpg";
import "./App.css";

class About extends Component {
  render() {
    return (
      <div className="About" id="About">
          <div class="card">
          <img class="card-img-top-profile" src={Profile} fluid alt="profile" />
            <div class="card-body">
              <h1 class="card-title">Acerca de mi</h1>
              <h3 class="card-text">
              Emprendedora de corazón, apasionada por el nuevo conocimiento, mi
              mayor motivación es crecer profesionalmente, y alcanzar la mejor
              versión de mí mediante la experiencia.
              </h3>
              <h3 class="card-text">
              Me gusta ver la vida con alegría y me entusiasma hacer una
              diferencia positiva con quienes me rodean.
              </h3>
              </div>
          </div>
      </div>
    );
  }
}

export default About;
