import React from "react";
import Card from "react-bootstrap/Card";
import Hiking from "./Icons/hiking";
import Utensils from "./Icons/utensils";
import Tiket from "./Icons/tiket";
import CalendarIcon from "./Icons/calendarIcon";
import Van from "./Icons/van";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const ItemDetail = ({ items }) => {
  return (
    <div>
      <img className="detailImg" src={items.gallery[1]} alt={items.title} />

      <Card className="cardDetail">
        <Card.Body className="cardBody">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div className="iconBox">
              <Hiking className="iconDetail" />
              <p className="iconText">Dificultad: {items.dificulty}</p>
            </div>

            <div className="iconBox">
              <Utensils className="iconDetail" />
              <p className="iconText">{items.meals}</p>
            </div>

            <div className="iconBox">
              <Tiket className="iconDetail" />
              <p className="iconText">{items.tikets}</p>
            </div>

            <div className="iconBox">
              <CalendarIcon className="iconDetail" />
              <p className="iconText">{items.season}</p>
            </div>

            <div className="iconBox">
              <Van className="iconDetail" />
              <p className="iconText">{items.transfer}</p>
            </div>
          </div>
          <p className="cardTitle">{items.title}</p>
          <Card.Text style={{fontWeight:"600"}}>
           
            Duración:
            {items.duration}
          </Card.Text>
          <Card.Text style={{fontWeight:"600"}}>
            Incluye:
            {items.include[0]}        

          </Card.Text>

          <Card.Text style={{fontWeight:"600"}}>
          {items.include[1]}
          </Card.Text>

          <Card.Text style={{ marginTop: "1rem", lineHeight: "24px" }}>
            {items.description[0]}
          </Card.Text>

          <Card.Text style={{ marginTop: "1rem", lineHeight: "24px" }}>
            {items.description[1]}
          </Card.Text>

          <Card.Text style={{ marginTop: "1rem", lineHeight: "24px" }}>
            {items.description[2]}
          </Card.Text>
        </Card.Body>

        <Button className="btnReserva"
          style={{
            backgroundColor: "#1a4ea0",
            borderRadius: "0.625rem",
            color: "#ffff",
            fontSize: "1.125rem",
            margin: "2rem",
            fontWeight: "600",
            width: "200px",
          }}
          size="m"
          active
        >
          <Link to={"/Contacto"} className="linkReserva">
            QUIERO RESERVAR
            <span>
              <i
                style={{ marginLeft: "2px" }}
                className="bi bi-arrow-right"
              ></i>
            </span>
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default ItemDetail;
