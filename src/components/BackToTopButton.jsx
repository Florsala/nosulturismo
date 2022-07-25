import React, { useEffect, useState } from 'react'

export const BackToTopButton = () => {

const [backToTopButton, setBackToTopButton] = useState(false);

useEffect(() => {
 window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        setBackToTopButton(true)
    } else{
        setBackToTopButton(false)
    }
 })
}, [])


const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


  return (
    <div>
{backToTopButton && (
    <i className="bi bi-arrow-up-circle" style={{position: "fixed",
    right: "50px", bottom: "50px",
    cursor:"pointer",
    
    fontSize:"50px",
    color:"orange"

}} onClick={scrollUp} ></i>
)}

    </div>
  )
}
