import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import minitrekking from "../assets/minitrekk3.jpg";
import rutas from "../assets/Fte2000.jpg";
import VideoBcg from './VideoBcg'

import invierno from '../assets/invierno.jpg'
import guanacos from '../assets/guanacos.jpg'
import vista from '../assets/vista.jpg'
import flores from '../assets/flores.jpg'
import cartelPerito from '../assets/cartel3.jpg'


import Card from "react-bootstrap/Card";
import categories from "../data/categories";

const Home = () => {
  return (
    <>
<VideoBcg/>
   {/*  <Carousel/> */}
      
<div className="intro">
  <h1 style={{fontWeight:'bold', textAlign:'center', fontFamily:'Lora'}}>BIENVENIDOS A NO SUL TURISMO</h1>
  <p style={{lineHeight: '2.2rem', letterSpacing: '0.7px', marginTop: '2rem'}}>
    No Sul Turismo es una Agencia de Viajes y Turismo en El Calafate-Patagonia-Argentina.

Brindamos servicios turísticos personalizados. 

Somos una empresa de viajes y turismo familiar, de profesionales en Medio-Ambiente y Turismo; y que estamos trabajamos en el área hace más de 23 años. <br />
Realizamos nuestra gestión empresarial orientada y motivada por los principios de respeto, honestidad, compromiso, calidad y transparencia.
Tenemos experiencia brindando servicios en distintos destinos turísticos internacional receptivo de Argentina. <br />
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
  <div >
  <img src={invierno} alt="invierno" />

  </div>

  <div>
    <img src={guanacos} alt="guanacos" />
  </div>

  <div>
    <img src={vista} alt="vista" />
  </div>


</div>

<div className="categories"
       
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
                      style={{ margin: "1.25rem", textShadow: "0 0 1.25rem black" }}
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







        {/* <div
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
          <h1 className="header_title">EXPLORA EL CALAFATE</h1>
          <p className="header_text">
           Tierra de glaciares
          </p>
          <Link to={'/tours'}>
            <Button
              style={{ backgroundColor: "#150773", borderRadius: "10px" }}
              size="m"
              active
            >
              DESCUBRÍ
              <span>
                <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
              </span>
            </Button>
          </Link>
        </div> */}

       
    {/*   </section> */}

      <section className="section2 container-fluid"
        style={{
          backgroundImage: `url(${minitrekking})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="secondHeader">
          <div className="seconHeader_yellowBorder"></div>
          <h2 className="secondHeader_title">SORPRÉNDETE</h2>
          <p className="secondHeader_text">
          ¡Sabemos lo que hacemos, pero sobre todo amamos lo que hacemos!
          </p>
        {/*   <Button
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
              <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
            </span>
          </Button> */}
        </div>

       
      </section>

      <section className="container-fluid"
        style={{
          backgroundImage: `url(${rutas})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="thirdHeader">
        <div className="thirdHeader_yellowBorder"></div>

          <h2 className="thirdHeader_title">VIVÍ LA EXPERIENCIA PATAGONIA CON NO SUL</h2>
          <p className="thirdHeader_text">
          Nuestro propósito es hacer viajes únicos, personalizados y realmente especiales.
que satisfagan las necesidades y/o preferencias de los clientes, permitiendo el máximo placer dentro de un servicio personalizado.

          </p>
          <Button
            style={{
              backgroundColor: "#150773",
              borderRadius: "0.625rem",
              color: "#ffff",
              fontSize: "1.125rem",
              
            }}
            size="m"
            active
          >
           
            CONTACTANOS

            
            <span>
              <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
