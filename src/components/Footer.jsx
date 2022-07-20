import React from "react";
/* import Table from "react-bootstrap/Table";
 */
const Footer = () => {
  return (

    <div>
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

      

      {/* <Table responsive="sm" borderless variant="dark"  >
        <thead>
          <tr>
            <th>CONTACTO</th>
            <th>SOMOS NO SUL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="footerInfo_container">
              <i className="bi bi-envelope"></i>
              <p>reservas@nosulturismo.tur.ar</p>
            </td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td className="footerInfo_container">
              <i className="bi bi-telephone"></i>
              <p>+542966999999</p>
            </td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>

          <tr>
            <td className="footerInfo_container">
            <i className="bi bi-geo-alt"></i>
            <p>El Calafate - Patagonia Argentina</p>
            </td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table> */}
    </div>

    </div>
  );
};

export default Footer;
