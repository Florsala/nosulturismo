import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import destination from "../data/destination";
import { useState } from "react";
import "./Dropdown.css";
import IconsMenu from "./IconsMenu";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

          
        </div>
       

        <div>

 <p
            style={{
              fontSize: "0.7rem",
              color: "#d7e2e7",
              textDecoration: "none",
              fontWeight: "200",
              paddingTop: "0.2rem",
            }}
          >
          
            No Sul Turismo EVT - Leg 17174
          </p> 

         

</div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/"}
              onClick={() => setClick(false)}
            >
              INICIO
            </Link>
          </li>

          <li className="nav-item" onClick={() => setOpen(!open)}>
            <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
              DESTINOS
            </Link>

            <ul className={open ? "dropdown-menu open" : "dropdown-menu"}>
              {destination.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      className="dropdown-link"
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
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/Nosotros"}
              onClick={() => setClick(false)}
            >
              NOSOTROS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/contacto"}
              onClick={() => setClick(false)}
            >
              CONTACTO
            </Link>
          </li>
          <li>
             <IconsMenu /> 
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

     
    </>
  );
};



export default NavBar;
