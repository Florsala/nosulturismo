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
          
            <Button
            className='btnHome-1'
              style={{  
              borderRadius: "0.625rem",
              width:"9.375rem"
            
            }}
              size="m"
              active
            >
              <Link to={'/destino/El Calafate'}
              style={{textDecoration:'none',
            color:'#fff',
            fontWeight:600,
            letterSpacing:'0.0938rem'
            }}
              >
              DESCUBRÍ
              <span>
                <i style={{marginLeft: '2px'}} className="bi bi-arrow-right"></i>
              </span>

              </Link>
            </Button>
          
        </div> 


    </div>
  )
}

export default VideoBcg