import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      
      <div className="container" style={{display:'flex'}}>
        <div className="row">
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
                Calle 704 N° 223 El Calafate - Patagonia Argentina
              </li>
            </ul>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap'
            }}>
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



          

          {/* <div className="col-md-4 col-sm-6">
            <div className="footer-yellowBorder "></div>
            <h5 className="mt-2">SOMOS NO SUL</h5>
            <ul className="list-unstyled footer-text">
              <li className="mb-4">
                Nuestro propósito es hacer viajes únicos, personalizados y
                realmente especiales.
              </li>
            </ul>
          </div> */}
        </div>


        <div className="  col-md-4 col-sm-6">
          <div className="footer-yellowBorder mb-2"></div>
          <ul className="list-unstyled" >
            <li className="mb-2">HOME</li>
            <li className="mb-2">TOURS</li>
            <li className="mb-2">NOSOTROS</li>
            <li className="mb-2">CONTACTO</li>
          </ul>
          
        </div>


       
      </div>

      <div className="footer-bottom">

      <Link to={'/arrepentimiento'}>
          <Button
            style={{
              backgroundColor: "#f44336",
              borderRadius: "10px",
              marginTop: "1rem",
              marginBottom: "2rem",
             
            }}
            size="l"
            active
          >
            Botón de arrepentimiento
            <span>
              <i
                style={{ marginLeft: "2px" }}
                className="bi bi-arrow-right"
              ></i>
            </span>
          </Button>

          </Link>

          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} | All rights reserved - No Sul
            Turismo EVT - Leg 17174
          </p>
        </div>
    </div>

    /*  <div>
    <div className="container-fluid footer">
      <div className="footerContainers">
        <div className="container-sm footerInfo">
          <h6>CONTACTO</h6>

          <div className="footerInfo_container">
            <span>
              <i className="bi bi-envelope"></i>
            </span>
            <p>reservas@nosulturismo.tur.ar</p>
          </div>
          <div className="footerInfo_container">
            <span>
              <i className="bi bi-telephone"></i>
            </span>
            <p>+542966999999</p>
          </div>
          <div className="footerInfo_container">
            <span>
              <i className="bi bi-geo-alt"></i>
            </span>
            <p>El Calafate - Patagonia Argentina</p>
          </div>
        </div>

        <div className="container-sm footerInfo">
          <h6>SOMOS NO SUL</h6>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore
              magna aliqua.
            </p>
          </div>
        </div>

<div className="footerBottom">
        <p> Ⓒ 2022 | All rights reserved - No Sul Turismo EVT - Leg 10000</p>
      </div>

      </div>

      

    </div>

    </div> */
  );
};

export default Footer;
