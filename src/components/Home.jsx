import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import perito from "../assets/perito.jpg";
import zorro from "../assets/zorro2.jpg";
import rutas from "../assets/Fte2000.jpg";

import Card from "react-bootstrap/Card";
import categories from "../data/categories";

const Home = () => {
  return (
    <>
      <section>
        <div
          className="headerImage"
          style={{
            backgroundImage: `url(${perito})`,
            height: "100vh",
            backgroundSize: "cover",
            filter: "contrast(1.35) brightness(0.65)",
            position: "relative",
          }}
        ></div>
        <div className="header">
          <div className="yellowBorder"></div>
          <h1 className="header_title">EXPLORA</h1>
          <p className="header_text">
            loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren
            ipsumloren ipsum loren ipsum
          </p>
          <Link to={'/tours'}>
            <Button
              style={{ backgroundColor: "#150773", borderRadius: "10px" }}
              size="m"
              active
            >
              DESCUBRÍ
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
            </Button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "150px",
            position: "absolute",
            transform: "translate(300px, -330px)",
          }}
        >
          {categories.map((category) => {
            return (
              <div key={category.id} style={{ position: "relative" }}>
                <Link to={category.address} style={{ textDecoration: "none" }}>
                  <div>
                    <Image
                      className=" categoryImg"
                      src={category.img}
                      alt={category.name}
                    />
                    <Card.ImgOverlay
                      style={{ margin: "20px", textShadow: "0 0 20px black" }}
                      className="categoryText"
                    >
                      <Card.Text variant="bottom">{category.name}</Card.Text>
                    </Card.ImgOverlay>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${zorro})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="secondHeader">
          <h2 className="secondHeader_title">SORPRÉNDETE</h2>
          <p className="header_text">
            loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren
            ipsumloren ipsum loren ipsum
          </p>
          <Button
            style={{
              backgroundColor: "#F8DE15",
              borderRadius: "10px",
              color: "#1A4EA0",
              fontSize: "18px",
              fontWeight: "700",
            }}
            size="m"
            active
          >
            VER TODO
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </Button>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${rutas})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="secondHeader">
          <h2 className="secondHeader_title">VIVÍ LA EXPERIENCIA PATAGONIA</h2>
          <p className="header_text">
            loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren
            ipsumloren ipsum loren ipsum
          </p>
          <Button
            style={{
              backgroundColor: "#150773",
              borderRadius: "10px",
              color: "#ffff",
              fontSize: "18px",
              fontWeight: "700",
            }}
            size="m"
            active
          >
            CONTACTANOS
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
