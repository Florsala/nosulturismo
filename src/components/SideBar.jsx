import React from "react";
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="SideBar">
      <div>
         <Link to={'/'} style={{textDecoration:'none'}}    
        >
          <p className="SideBarText"
          style={{ fontWeight: "700", fontFamily: "Montserrat", color:'#ffff' }}>
          NO SUL TURISMO

          </p>
          </Link>
      </div>

      <div className="SideBar-i">
        <i className="bi bi-whatsapp SideBar-icons"></i>
        <i className="bi bi-facebook SideBar-icons"></i>
        <i className="bi bi-youtube SideBar-icons"> </i>
        <i className="bi bi-instagram SideBar-icons"></i>
      </div>
    </div>
  );
};

export default SideBar;
