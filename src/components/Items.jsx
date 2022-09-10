import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Items = ({ items }) => {
  return (
    <div>
      <div className="containerItems">
        {items.map((items) => (
          <div key={items.id}>
            <Link
              to={`/tours/${items.id}`}
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <Card
                className="cardsContainer"
                style={{ width: "24rem", height: "34rem", margin: "1.25rem" }}
              >
                <Card.Img
                  style={{ objectFit: "cover", height: "40%" }}
                  variant="top"
                  src={items.gallery[0]}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.2rem", color: "black" }}>
                    {items.title}
                  </Card.Title>
                  <p>{items.destination}</p>
                </Card.Body>
                <ListGroup
                  className="list-group-flush"
                  style={{ fontSize: "0.9rem" }}
                >
                  <ListGroup.Item style={{ fontWeight: "600" }}>
                    Incluye: {items.include[0]}
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontWeight: "600" }}>
                    Duración del tour:{items.duration}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    style={{
                      fontSize: "1.1rem",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "flex-end",
                      alignContent: "flex-end",
                      fontWeight: "bold",
                    }}
                  >
                    ver más
                  </Card.Link>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
