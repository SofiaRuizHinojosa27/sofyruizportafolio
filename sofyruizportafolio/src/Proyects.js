import React, { Component } from "react";
import "./App.css";
import inBikeMe from "./inBikeMe.png";
import BurguerQueen from "./burguerQueen.png";
import Veggie from "./veggie.jpg";

class Proyects extends Component {
  render() {
    return (
      <div className="Proyects" id="Proyects">
        <h1 className="titleProyects">Mis Proyectos</h1>
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src={inBikeMe} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">IN-BIKE-ME</h5>
              <p class="card-text">
                Es una web de un activista ecologico, que busca fomentar el uso
                de la bicicleta como medio de transporte y hacer una comunidad
                de ciclistas urbanos en GDL
              </p>
              <p class="card-text">
                <strong>Stacks: </strong> Javascript, TDD, responsive web design
              </p>
              <a
                href="https://sofiaruizhinojosa27.github.io/GDL002-data-lover/src/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Conocelo
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Veggie} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Veggie Community</h5>
              <p class="card-text">
                Es una red social elaborada en React, pensada en veganos y
                vegetarianos que quieran compartir tips, restaurantes, recetas
                entre ellos, fomentando el que conecten entre si y encuentren
                mas personas interesadas en su mismo estilo de vida en su
                ciudad.
              </p>
              <p class="card-text">
                <strong>Stacks: </strong> React, React-router, Semantic UI, Firebase
              </p>
              <a
                href="https://sofiaruizhinojosa27.github.io/veggieCommunity/#/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                Conocelo
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={BurguerQueen} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Burguer Queen</h5>
              <p class="card-text">
                Es una app creada en react para apoyar a meseros y cocineros de
                un restaurante de hamburguesas gourmet, en el cual pueden
                realizar la comanda desde una tablet y enviarla a cocina para su
                preparación
              </p>
              <p class="card-text">
                <strong>Stacks: </strong> React, React-router, Bootstrap, Firebase
              </p>
              <a
                href="https://sofiaruizhinojosa27.github.io/burger-queen/#/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                Conocelo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proyects;
