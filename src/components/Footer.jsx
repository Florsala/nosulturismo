import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="row col-md-6">
          <div className="col-md-4 col-sm-6">
            <div className="footer-yellowBorder "></div>
            <h5 className="mt-2">CONTACTO</h5>

            <ul className="list-unstyled footer-text">
              <li className="mb-2">
                <span>
                  <i className="bi bi-envelope p-2"></i>
                </span>
                reservas@nosulturismo.tur.ar
              </li>
              <li className="mb-2">
                <span>
                  <i className="bi bi-envelope p-2"></i>
                </span>
                info@nosulturismo.tur.ar
              </li>
              <li className="mb-2">
                <span>
                  <i className="bi bi-telephone p-2"></i>
                </span>
                +542901611250
              </li>
              <li className="mb-2">
                <span>
                  <i className="bi bi-telephone p-2"></i>
                </span>
                +542902494457
              </li>
              <li className="mb-2">
                <span>
                  <i className="bi bi-geo-alt p-2"></i>
                </span>
                Calle 704 N° 223 El Calafate, Santa Cruz. Argentina
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                flexWrap: "wrap",
              }}
            >
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

              <a
                style={{ color: "#ffff" }}
                target={"blank"}
                href="https://twitter.com/home"
              >
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
        </div>

        <div className="  col-md-4 " style={{ marginLeft: "2rem" }}>
          <div className="footer-yellowBorder mb-2"></div>
          <ul className="list-unstyled">
            <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
              <li className="mb-2 footerLi">INICIO</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/destino/El Calafate"}
            >
              <li className="mb-2 footerLi">DESTINOS</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/Nosotros"}
            >
              <li className="mb-2 footerLi">NOSOTROS</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/Contacto"}
            >
              <li className="mb-2 footerLi">CONTACTO</li>
            </Link>
          </ul>
        </div>
  {/*       <div className="  col-md-2">
          <Link to={"/"}>
            <img
              style={{ width: "8rem", marginLeft: "2rem" }}
              src={logo}
              alt="logo"
            />
          </Link>
        </div> */}
      </div>

      <div className="footer-bottom">
        <ul>
          <li>Lic. Claudia Veronica Gonzalez</li>
          <li>Idoneo en Turismo n°: 15129</li>
          <li>No Sul Turismo EVT - Leg 17174 -</li>
          <li>
            <a
              href="https://drive.google.com/file/d/1VuhAfHdFYMwRSr6xxkzEvEpA2yw4L3Tq/view?usp=sharing"
              target={"blank"}
            >
              <p>Disposición habilitante: 265/18 Mintur</p>
            </a>
          </li>
          <li
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Link to={"/arrepentimiento"}>Botón de arrepentimiento</Link>
          </li>
          <li>
            <a
              href="https://tramitesadistancia.gob.ar/tramitesadistancia/detalle-tipo?id=624"
              target={"blank"}
            >
              <p
                style={{
                  marginTop: "1rem",
                  marginBottom: "2rem",
                }}
              >
                Denuncia contra una agencia
              </p>
            </a>
          </li>
        </ul>

        <p className="text-xs-center">
          &copy;{new Date().getFullYear()} | Todos los derechos reservados - No Sul
          Turismo EVT - Leg 17174
        </p>
      </div>
    </div>
  );
};

export default Footer;
