import React from "react";
import Form from "react-bootstrap/Form";
import Formulario from "./Formulario";

const Contacto = () => {
  return (
    <div style={{ marginTop: "9.375rem" }}>
      <div className="contactYellowBorder"></div>
      <h1 className="contactHeader">CONTACTO</h1>

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

      {/* <div style={{marginLeft:'150px'}}>
        <Form.Floating  className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>

      <Form.Floating style={{ marginTop: '15px'}}  className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>

      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>

      

        </div> */}
    </div>
  );
};

export default Contacto;
