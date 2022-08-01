import React from "react";
import Card from "react-bootstrap/Card";
import Hiking from "./Icons/hiking";
import Utensils from "./Icons/utensils";
import Tiket from "./Icons/tiket";
import CalendarIcon from "./Icons/calendarIcon";
import Van from "./Icons/van";


const ItemDetail = ({ items }) => {
  return (
    <div>
      <img className="detailImg" src={items.gallery[1]} alt={items.title} />

      <Card className="cardDetail">
        <Card.Body className="cardBody">
          <div style={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
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
          <Card.Text>
            {" "}
            Duración:
            {items.duration}
          </Card.Text>
          <Card.Text>
            Incluye:
          {items.include}
            </Card.Text> 
          <Card.Text style={{ marginTop: "1rem", lineHeight: '24px' }}>
            {items.description[0]}
            {items.description[1]}
            {items.description[2]}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
