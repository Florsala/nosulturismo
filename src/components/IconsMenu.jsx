import React from 'react'

const IconsMenu = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
       
      }}>
        <a
          style={{ color: "#ffff", textDecoration:"none" }}
          href="https://wa.me/message/Q2PK3VQSCRU4J1"
          target={"blank"}
        >
          <i className="bi bi-whatsapp NavBar-icons"></i>
        </a>

        <a
          style={{ color: "#ffff", textDecoration:"none" }}
          target={"blank"}
          href="https://www.facebook.com/nosulturismo"
        >
          <i className="bi bi-facebook NavBar-icons"></i>
        </a>

        <a
          style={{ color: "#ffff", textDecoration:"none" }}
          target={"blank"}
          href="https://twitter.com/home"
        >
          <i class="bi bi-twitter NavBar-icons"></i>
        </a>

        <a
          style={{ color: "#ffff", textDecoration:"none" }}
          target={"blank"}
          href="https://www.instagram.com/nosulturismo/"
        >
          <i className="bi bi-instagram NavBar-icons"></i>
        </a>
      </div>
  )
}


export default IconsMenu