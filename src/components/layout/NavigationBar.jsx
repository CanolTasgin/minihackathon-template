import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Humber Tech Society</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/about">Projects</Nav.Link>
            <Nav.Link href="/rooms">Rooms</Nav.Link>
            <Nav.Link href="/symptom-tracker">Symptom Tracker</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
