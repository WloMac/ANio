import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../style.css";

function NavigationBar() {
  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container className='navbarContainer'>
      <Navbar.Brand href="#home">
        <h1 className="heroHeading anioFont"> ANio</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#offer">Oferta</Nav.Link>
          <Nav.Link href="#about">O nas</Nav.Link>
          <Nav.Link href="#rel">Realizacje</Nav.Link>
          <Nav.Link href="#contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
