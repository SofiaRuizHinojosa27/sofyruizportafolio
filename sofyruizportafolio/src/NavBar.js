import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import Logo from "./logo.jpg";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="header"><img src={Logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link  href="#About">Acerca de mí</Nav.Link>
            <Nav.Link  href="#Proyects">Mis proyectos</Nav.Link>
            <Nav.Link  href="#Contact">Contactame</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
