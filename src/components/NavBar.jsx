import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Logo.png";

import destination from "../data/destination";

const NavBar = () => {
  return (
    <> <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
      <Navbar
        className="position-absolute top-0 end-0 NavBar"
        variant="light"
        expand="lg"
      >
       
        <Container className="NavBarContainer">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  style={{
                    color: "#1A4EA0",
                    fontWeight: "600",
                    textDecoration: "none",
                    textShadow: "1px 1px #fffe"
                  }}
                  to={"/"}
                >
                  HOME
                </Link>
              </Nav.Link>

             
              <NavDropdown
                style={{ color: "#1A4EA0", textShadow: "1px 1px #fffe", fontWeight: "600" }}
                title="TOURS"
                id="basic-nav-dropdown"
              >
                
                {destination.map((i) => {
                  return (
                    <NavDropdown.Item key={i.id}>
                      <Link to={i.address}>
                        {i.name}
                      </Link>
                    </NavDropdown.Item>
                  );
                })}
             
             
                <NavDropdown.Item>
                  <Link
                    to={"/tours"}
                    style={{
                      color: "#1A4EA0",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    VER TODO
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                style={{ color: "#1A4EA0", fontWeight: "600", textShadow: "1px 1px #fffe" }}
                to="#link"
              >
                NOSOTROS
              </Nav.Link>
              <Nav.Link
                style={{ color: "#1A4EA0", fontWeight: "600", textShadow: "1px 1px #fffe",   }}
                
              >
                <Link style={{textDecoration: "none", color: "#1A4EA0",
                    fontWeight: "600",
                    textShadow: "1px 1px #fffe"}} to={"/contacto"}>
                CONTACTO
                </Link>
                
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
