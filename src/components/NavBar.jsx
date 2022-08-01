import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import destination from "../data/destination";
import { useState } from "react";
import "./Dropdown.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false)

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="logo">

          <Link to={"/"} >
          <img src={logo} alt="logo" />
          </Link>
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link style={{color:'white', textDecoration:'none'}} to={"/"}>HOME</Link>
          </li>
          
          <li className="nav-item"  onClick={() => setOpen(!open)}
          >

            <Link style={{color:'white', textDecoration:'none'}} to={"/"}>DESTINOS</Link>

            <ul className={open ? "dropdown-menu open" : "dropdown-menu"}>
            {destination.map((item) => {
          return (
            <li  key={item.id}>
              <Link
              className='dropdown-link'
                to={item.address}
                onClick={() => setClick(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
            </ul>

          </li>
          
          <li className="nav-item">
           <Link style={{color:'white', textDecoration:'none'}} to={"/Nosotros"}>NOSOTROS</Link>
          </li>
          <li className="nav-item">
            <Link style={{color:'white', textDecoration:'none'}} to={"/contacto"}>CONTACTO</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#f8f8f8" }} />
          ) : (
            <FaBars size={30} style={{ color: "#f8f8f8" }} />
          )}
        </div>

      </div>

      {/* <Navbar
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
                    textShadow: "1px 1px #fffe",
                  }}
                  to={"/"}
                >
                  HOME
                </Link>
              </Nav.Link>

              <NavDropdown
                style={{
                  color: "#1A4EA0",
                  textShadow: "1px 1px #fffe",
                  fontWeight: "600",
                }}
                title="TOURS"
                id="basic-nav-dropdown"
              >
                {destination.map((i) => {
                  return (
                    <NavDropdown.Item key={i.id}>
                      <Link to={i.address}>{i.name}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link
                style={{
                  color: "#1A4EA0",
                  fontWeight: "600",
                  textShadow: "1px 1px #fffe",
                }}
                to="#link"
              >
                NOSOTROS
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#1A4EA0",
                  fontWeight: "600",
                  textShadow: "1px 1px #fffe",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#1A4EA0",
                    fontWeight: "600",
                    textShadow: "1px 1px #fffe",
                  }}
                  to={"/contacto"}
                >
                  CONTACTO
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
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
