import React from "react";
import FormArrep from "./FormArrep";

const BtnArrep = () => {
  return (
    <div>
      <div style={{ marginTop: "9.375rem", marginLeft: "10%" }}>
        <div className="contactYellowBorder"></div>
        <div style={{width:'100%'}}>
           <h1 className="BtnArrepHeader">Arrepentimiento de compra</h1>
        <p
          style={{
            marginLeft: " 8%",
            marginRight: " 8%",
            fontSize: "1.125rem",
            lineHeight: "1.875rem",
          }}
        >
          En cumplimiento con la Resolución 424/2020 de Secretaría de Comercio
          Interior de la República Argentina, ponemos a disposición el siguiente
          formulario para solicitar el arrepentimiento de compra.{" "}
        </p>
        </div>
       

        <FormArrep />
      </div>
    </div>
  );
};

export default BtnArrep;
