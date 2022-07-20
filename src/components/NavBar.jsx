import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="position-absolute top-0 end-0 NavBar"
        variant="dark"
        expand="lg"
      >
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Container className="NavBarContainer">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                  to={"/"}
                >
                  HOME
                </Link>
              </Nav.Link>

              <NavDropdown
                style={{ color: "#FFFFFF", fontWeight: "600" }}
                title="TOURS"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item to="#action/3.1">
                  EL CALAFATE
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">EL CHALTÉN</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">USHUAIA</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">CHILE</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/tours"}  style={{
                    color: "#1A4EA0",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}>VER TODO</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                style={{ color: "#FFFFFF", fontWeight: "600" }}
                to="#link"
              >
                NOSOTROS
              </Nav.Link>
              <Nav.Link
                style={{ color: "#FFFFFF", fontWeight: "600" }}
                to="#link"
              >
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

/* const NavBar = () => {
  return (
  
  <div>   

    <img className="logo" src="logo.png" alt="logo" />
    <nav>
  <Link to="/">HOME</Link>
</nav>
    <h6>TOURS</h6>
    <h6>CONTACTO</h6>
    <h6>NOSOTROS</h6>
    
    </div>
  
  
  )
}; */

export default NavBar;
