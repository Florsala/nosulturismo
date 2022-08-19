import React from 'react'
import estepa from '../assets/estepa2.jpg'

const Nosotros = () => {
  return (

    <>
    <div className="intro">
  <h1 style={{fontWeight:'bold', textAlign:'center', fontFamily:'Lora'}}>QUIENES HACEMOS NO SUL TURISMO</h1>
  <p style={{lineHeight: '2.2rem', letterSpacing: '0.7px', marginTop: '2rem'}}>
  Trabajamos con familias y/o pequeños grupos muy reducidos, y servicios privados.
De forma responsable acorde a los tiempos que corren, donde todos necesitamos seguridad y buena atención.
Por eso asumimos un firme compromiso con la prestación de un servicio de calidad, el desarrollo de la comunidad local y de nuestro personal, además del cuidado del ambiente.
</p>
<p style={{lineHeight: '2.2rem', letterSpacing: '0.7px', marginTop: '2rem'}}>
Ofrecemos a nuestros clientes la visita a las comunidades locales, dentro del marco de pautas de respeto cultural y comercial definidos por el Código del Turista Responsable de la Organización Mundial de Turismo y del Pacto Global de las Naciones Unidas.
Brindamos productos sostenibles que se complementan con un conjunto de esfuerzos de la empresa por cuidar en todas sus operaciones el entorno natural, el patrimonio cultural de nuestra región y el ahorro y la eficiencia en el uso de la energía y del agua, incorporando tecnologías para convertir nuestros servicios cada vez más accesibles y sostenibles.

</p>
<p style={{lineHeight: '2.2rem', letterSpacing: '0.7px', marginTop: '2rem'}}>
Nos enfocamos en mantener un balance adecuado a nivel socio-económico y ambiental para garantizar a las futuras generaciones el acceso a los mismos recursos que hoy disfrutamos.

No Sul Turismo EVT los invita a disfrutar de nuestros servicios y productos, en Patagonia dentro de un marco natural y paisajístico muy de rico y majestuoso 
Por eso hacemos inca pie en que el intercambio debe ser respetuoso y con un marcado y fuerte compromiso con el cuidado del ambiente.
Porque entendemos que cuidando el lugar que visitamos nos cuidamos todos.
</p>
<p style={{lineHeight: '2.2rem', letterSpacing: '0.7px', marginTop: '2rem'}}>Nos ajustamos a las medidas destinadas a proteger la salud de todos, prevenir accidentes y promover el cuidado y condiciones de higiene y seguridad en los servicios que brindamos según a las normas nacionales e internacionales vigentes.
Trabajamos respetando los siguientes códigos:
</p>
<ul>
<li>*Código de conducta para visitas a áreas naturales, patrimoniales, arqueológicas y comunidades originarias.
</li>
<li>*Código de conducta para la visita a sitios de interés patrimonial histórico cultural y arqueológico.
</li>
<li>*Protocolo para la Prevención de Conductas de Perjuicio Social.
</li>
<li>*Código de Conducta para la protección de niños.
</li>
<li>*Protocolo de medidas a tener en cuenta frente al COVID-19.
</li>

</ul>






</div>

<div>
  <img src={estepa} alt="estepa" style={{height: "500px",
    width: "100%",
    objectFit: "cover",
    opacity: "70%"}}/>
</div>

</>
  )
}

export default Nosotros