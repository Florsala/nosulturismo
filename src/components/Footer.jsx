import React from "react";
/* import Table from "react-bootstrap/Table";
 */
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-yellowBorder "></div>
            <h5 className="mt-2">CONTACTO</h5>

            <ul className="list-unstyled footer-text">
              <li className="mb-2" >
                <span>
                  <i className="bi bi-envelope p-2"></i>
                </span>
                reservas@nosulturismo.tur.ar
              </li>
              <li className="mb-2" >
                <span>
                  <i className="bi bi-envelope p-2"></i>
                </span>
                info@nosulturismo.tur.ar
              </li>
              <li className="mb-2">
                <span>
                  <i className="bi bi-telephone p-2"></i>
                </span>
                +542966999999
              </li>
              <li className="mb-2">
                <span>
                  <i className="bi bi-geo-alt p-2"></i>
                </span>
                El Calafate - Patagonia Argentina
              </li>
              
            </ul>
          </div>

          <div className="col-md-4 col-sm-6">
          <div className="footer-yellowBorder "></div>
            <h5 className="mt-2">SOMOS NO SUL</h5>
            <ul className="list-unstyled footer-text">
              <li className="mb-4">Nuestro propósito es hacer viajes únicos, personalizados y realmente especiales.
 </li>
              
              <li>Nuestro lema: Realizando sueños
</li>
              
            </ul>
          </div>

          
        </div>

        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} | All rights reserved - No Sul
            Turismo EVT - Leg 10000{" "}
          </p>
        </div>
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
