import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="header">MENU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#About">Acerca de mí</Nav.Link>
            <Nav.Link href="#Proyects">Mis proyectos</Nav.Link>
            <Nav.Link href="#Contact">Contactame</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
