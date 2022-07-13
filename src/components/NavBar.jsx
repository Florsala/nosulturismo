import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    
    <Navbar className="position-absolute top-0 end-0 NavBar"  expand="lg">
      <Container className="NavBarContainer">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            
            <NavDropdown title="TOURS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">EL CALAFATE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">EL CHALTÉN
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">USHUAIA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CHILE</NavDropdown.Item>
              {/*<NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#link">NOSOTROS</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



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
