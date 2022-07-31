import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import fitzRoy from "../assets/fitzroy.jpg"
import faro from "../assets/lighthouse.jpg"


function DarkVariantExample() {
  return (

    <div >


   
    <Carousel variant="dark" indicators={false} fade={true} pause={'hover'} controls={true}>
      <Carousel.Item interval={2000}>
        <img 
          className="d-block w-100 carouselImg"
         /*  src={pertitopas} */
         src='https://res.cloudinary.com/dfjdyjffb/image/upload/v1659011211/NoSul/perito3_hmxmfq.jpg'
          alt="Perito Moreno"
          
        />
        <Carousel.Caption >
        <div className="header">
          <div className="yellowBorder"></div>
          <h1 className="header_title">DESCUBRI EL CALAFATE</h1>
          <p className="header_text">
           Tierra de glaciares
          </p>
          <Link to={'/destino/El Calafate'}>
            <Button
              style={{ backgroundColor: "#150773", borderRadius: "0.625rem" }}
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
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img 
          className="d-block w-100 carouselImg"
          src={fitzRoy}
          alt="Second slide"
        />
        <Carousel.Caption >
        <div className="header container-fluid">
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
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img 
          className="d-block w-100 carouselImg"
          src={faro}
          alt="FaroUshuaia"
        />
        <Carousel.Caption>
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
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>

    </div>
  );
}

export default DarkVariantExample;