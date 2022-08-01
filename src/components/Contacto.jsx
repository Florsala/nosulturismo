import React from "react";
import Formulario from "./Formulario";

const Contacto = () => {
  return (
    <div style={{ marginTop: "9.375rem" }}>
      <div className="contactYellowBorder"></div>
      <h1 className="contactHeader">CONTACTO</h1>
      <p style={{marginLeft:' 8%',
    fontSize: '18px',
    lineHeight: '30px'}}>
      Usted puede contratar todo en nuestra agencia de viajes y turismo: <br />
       los pasajes aéreos o terrestres, las excursiones y paseos habilitados en la localidad.</p>

      <Formulario />

      <div className="rectangle-b">
        <div className="YellowLine"></div>
        <div
          style={{
            color: "#ffff",
            marginLeft: "13%",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              padding: "10px",
              fontWeight: "500",
              letterSpacing: "1.1px",
            }}
          >
            info
          </p>
          <ul className="list-unstyled ">
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
      </div>
      <div className="rectangle-o"></div>

      
    </div>
  );
};

export default Contacto;
