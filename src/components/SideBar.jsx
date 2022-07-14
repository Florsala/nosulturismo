import React from "react";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div>
        <p
          className="SideBarText"
          style={{ fontWeight: "700", fontFamily: "Montserrat" }}
        >
          NO SUL TURISMO
        </p>
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
