import React, { Component } from "react";
import "./App.css";

class Skills extends Component {
  render() {
    return (
        <React.Fragment>
        <h1 className="titleSkills">Habilidades</h1>
        <div class="row">
          <div class="col">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h2 class="display-4">
                  Soft Skills<i class="fas fa-users" />
                </h2>
                <p class="lead">Comunicacion asertiva</p>
                <p class="lead">Adaptable</p>
                <p class="lead">Resolución de problemas</p>
                <p class="lead">Mejora continua</p>
                <p class="lead">Trabajo colaborativo</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h2 class="display-4">
                  Tech Skills<i class="fas fa-chalkboard-teacher" />
                </h2>
                <p class="lead">Javascript ES6</p>
                <p class="lead">React JS</p>
                <p class="lead">Node.JS</p>
                <p class="lead">Frameworks Css</p>
                <p class="lead">Firebase</p>
                <p class="lead">Figma</p>
                <p class="lead">Responsive design</p>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default Skills;
