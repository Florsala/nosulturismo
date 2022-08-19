import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div>
        <Link to={"/"} style={{ textDecoration: "none" }} className="sideText">
          <p
            className="SideBarText"
            style={{
              fontWeight: "700",
              fontFamily: "Montserrat",
              color: "#ffff",
            }}
          >
            NO SUL TURISMO
          </p>
        </Link>
      </div>

      <div className="SideBar-i">
        <a
          style={{ color: "#ffff" }}
          href="https://wa.me/message/Q2PK3VQSCRU4J1"
          target={"blank"}
        >
          <i className="bi bi-whatsapp SideBar-icons"></i>
        </a>

        <a
          style={{ color: "#ffff" }}
          target={"blank"}
          href="https://www.facebook.com/nosulturismo"
        >
          <i className="bi bi-facebook SideBar-icons"></i>
        </a>

        <a style={{ color: "#ffff" }}
          target={"blank"} href="https://twitter.com/home">
          <i class="bi bi-twitter SideBar-icons"></i>
        </a>

        <a
          style={{ color: "#ffff" }}
          target={"blank"}
          href="https://www.instagram.com/nosulturismo/"
        >
          <i className="bi bi-instagram SideBar-icons"></i>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
