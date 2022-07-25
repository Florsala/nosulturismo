import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import zorro from "../assets/zorro2.jpg";
import rutas from "../assets/Fte2000.jpg";
import Carousel from 'react-bootstrap/Carousel';

import Card from "react-bootstrap/Card";
import categories from "../data/categories";

const Home = () => {
  return (
    <>
      <section>

        <div > 
      <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 carouselImg"
          src="https://images.unsplash.com/photo-1559061211-1923837ec988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="El Calafate"
        />
        
        <div className="header">
          <div className="yellowBorder"></div>
          <h1 className="header_title">DESCUBRI EL CALAFATE</h1>
          <p className="header_text">
           Tierra de glaciares
          </p>
          <Link to={'/destino/El Calafate'}>
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
        </div> 
          
     
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImg"
          src="https://images.unsplash.com/photo-1586970741998-42cb95207547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="El Chaltén"
        />
        <div className="header">
          <div className="yellowBorder"></div>
          <h1 className="header_title">EXPLORA EL CHALTÉN</h1>
          <p className="header_text">
          Capital Nacional de los Senderos
          </p>
          <Link to={'/destino/El Chalten'}>
            <Button
              style={{ backgroundColor: "#150773", borderRadius: "10px" }}
              size="m"
              active
            >
              EXPLORA
              <span>
                <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
              </span>
            </Button>
          </Link>
        </div> 
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img 
          className="d-block w-100 carouselImg"
          src="https://images.unsplash.com/photo-1559061156-4a46ec29107d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />
        <div className="header">
          <div className="yellowBorder"></div>
          <h1 className="header_title">VIVI USHUAIA</h1>
          <p className="header_text">
          Fin del mundo, principio de todo
          </p>
          <Link to={'/destino/Ushuaia'}>
            <Button
              style={{ backgroundColor: "#150773", borderRadius: "10px" }}
              size="m"
              active
            >
              EXPLORA
              <span>
                <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
              </span>
            </Button>
          </Link>
        </div> 



      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img 
          className="d-block w-100 carouselImg"
          src="https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Chile"
        />
        <div className="header">
          <div className="yellowBorder"></div>
          <h1 className="header_title">CHILE</h1>
          <p className="header_text">
          El paraíso vecino
          </p>
          <Link to={'/destino/Ushuaia'}>
            <Button
              style={{ backgroundColor: "#150773", borderRadius: "10px" }}
              size="m"
              active
            >
              EXPLORA
              <span>
                <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
              </span>
            </Button>
          </Link>
        </div> 



      </Carousel.Item>






    </Carousel>
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

        <div
          style={{
                    
            marginTop: "270px",
            display: "flex",
            marginLeft: "93px",
            position: "absolute",
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
              borderRadius: "10px",
              color: "#ffff",
              fontSize: "18px",
              
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
