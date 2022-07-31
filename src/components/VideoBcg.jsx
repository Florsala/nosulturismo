import React from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/videoP.mp4'
import Button from "react-bootstrap/Button";

const VideoBcg = () => {
  return (

    <div style={{height:'100vh', width:'100%'}}>

        <div className='overlay'></div>

<video style={{width:'100%', height:'100%', objectFit:'cover'}} src={video} autoPlay loop muted></video>

<div className="header content">
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


    </div>
  )
}

export default VideoBcg