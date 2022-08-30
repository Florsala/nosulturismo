import React from "react";
import FormArrep from "./FormArrep";

const BtnArrep = () => {
  return (
    <div>
      <div style={{ display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    marginTop:'2rem',
    justifyContent:'center',
   }}>
       
        <div  style={{ marginTop: "2rem", marginRight:'2rem', marginLeft:'2rem' }}>
        <div className="contactYellowBorder"></div>
           <h1 className="BtnArrepHeader">Arrepentimiento de compra</h1>
        <p
          style={{
            margin:'2rem',
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
