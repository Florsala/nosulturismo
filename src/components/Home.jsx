import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import VideoBcg from "./VideoBcg";

import invierno from "../assets/invierno.jpg";
import guanacos from "../assets/guanacos.jpg";
import flores from "../assets/flores.jpg";
import cartelPerito from "../assets/cartel3.jpg";

import Card from "react-bootstrap/Card";
import destination from "../data/destination";



const Home = () => {
  return (
    <>
      <VideoBcg />

      <div className="intro">
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Lora",
            color: "#35464e",
          }}
        >
          BIENVENIDOS A NO SUL TURISMO
        </h1>
        <p
          style={{
            lineHeight: "2.2rem",
            letterSpacing: "0.7px",
            marginTop: "2rem",
          }}
        >
          No Sul Turismo es una Agencia de Viajes y Turismo en El
          Calafate-Patagonia-Argentina. Brindamos servicios turísticos
          personalizados. Somos una empresa de viajes y turismo familiar, de
          profesionales en Medio-Ambiente y Turismo; y que estamos trabajamos en
          el área hace más de 23 años. <br />
          Realizamos nuestra gestión empresarial orientada y motivada por los
          principios de respeto, honestidad, compromiso, calidad y
          transparencia. Tenemos experiencia brindando servicios en distintos
          destinos turísticos internacional receptivo de Argentina. <br />
          Sabemos lo que hacemos, pero sobre todo amamos lo que hacemos!. <br />
        </p>
      </div>
      <div className="thumbnailContainer">
        <div>
          <img src={cartelPerito} alt="cartelPerito" />
        </div>
        <div>
          <img src={flores} alt="flores" />
        </div>
        <div>
          <img src={invierno} alt="invierno" />
        </div>

        <div>
          <img src={guanacos} alt="guanacos" />
        </div>
      </div>

      <section className="container-fluid">
        <div className="thirdHeader">
          <div className="thirdHeader_yellowBorder"></div>

          <h2 className="thirdHeader_title">
            VIVÍ LA EXPERIENCIA PATAGONIA CON NO SUL
          </h2>
          <p className="thirdHeader_text">
            Nuestro propósito es hacer viajes únicos, personalizados y realmente
            especiales. que satisfagan las necesidades y/o preferencias de los
            clientes, permitiendo el máximo placer dentro de un servicio
            personalizado.
          </p>

          <Link to={"/Contacto"}>
            <Button
              className="btnHome-1"
              style={{
                backgroundColor: "#150773",
                borderRadius: "0.625rem",
                color: "#ffff",
                fontSize: "1.125rem",
                fontWeight: "600",
                letterSpacing: "0.0938rem",
              }}
              size="m"
              active
            >
              CONTACTANOS
              <span>
                <i
                  style={{ marginLeft: "2px" }}
                  className="bi bi-arrow-right"
                ></i>
              </span>
            </Button>
          </Link>
        </div>

        <div className="categories">
          {destination.map((item) => {
            return (
              <div key={item.id} style={{ position: "relative" }}>
                <Link to={item.address} style={{ textDecoration: "none" }}>
                  <div className="categoryCard">
                    <Image
                      className=" categoryImg"
                      src={item.img}
                      alt={item.name}
                    />
                    <Card.ImgOverlay
                      style={{
                        margin: "1.25rem",
                        textShadow: "0 0 1.25rem black",
                      }}
                      className="categoryText"
                    >
                      <Card.Text style={{marginTop: "1rem"}} variant="bottom">{item.name}</Card.Text>
                    </Card.ImgOverlay>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>


      </section>
    </>
  );
};

export default Home;
