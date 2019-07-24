import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import Logo from "./logo.jpg";
import "./NavBar.css";
import {Link} from "react-scroll";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="header"><img src={Logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Link to="AboutBooot" smooth={true} duration={3000} offset={-70}>Acerca de mí <i class="fas fa-arrow-down"></i> </Link>
            <Link to="Proyects" smooth={true} duration={3000} offset={-70}>Mis proyectos <i class="fas fa-arrow-down"></i> </Link>
            <Link to="Contact" smooth={true} duration={3000}>Contactamé <i class="fas fa-arrow-down"></i> </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
