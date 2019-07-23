import React, { Component } from "react";
import "./App.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <h1>Encuentrame en:</h1>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-item"
              href="https://github.com/SofiaRuizHinojosa27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github m-xl" />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/dulcesofia-ruiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin xl" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mailto:srh_19@hotmail.com">
              <i class="fas fa-envelope" />
            </a>
          </li>
        </ul>
        <h4>
          <i class="far fa-copyright" /> Sofia Ruiz Hinojosa
        </h4>
      </div>
    );
  }
}

export default Contact;
