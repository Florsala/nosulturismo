import React from "react";
import Formulario from "./Formulario";

const Contacto = () => {



  return (
    <div style={{display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft:'4rem',
    marginTop:'2rem',
    justifyContent:'center'
    }}>
      <div style={{ marginTop: "2rem", marginRight:'2rem' }}>
        <div className="contactYellowBorder"></div>
        <h1 className="contactHeader">CONTACTO</h1>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.875rem",
            margin:'2rem'
          }}
        >
          Usted puede contratar todo en nuestra agencia de viajes y turismo:{" "}
          <br />
          los pasajes aéreos o terrestres, las excursiones y paseos habilitados
          en la localidad.
        </p>

        <Formulario />
      </div>
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
              fontSize: "1.125rem",
              padding: "0.625rem",
              fontWeight: "500",
              letterSpacing: "0.0688rem",
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
        </div>
      </div>
      <div className="rectangle-o"></div>
    </div>
  );
};

export default Contacto;
