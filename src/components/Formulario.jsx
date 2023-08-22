

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputTel, cambiarInputTel] = useState("");
  const [inputMsg, cambiarInputMsg] = useState("");
  const [sentForm, setSentForm] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSentForm(true);

    emailjs
      .sendForm(
        "service_o0t5z56",
        "template_yy9991s",
        form.current,
        "BsfYLVTbz5mz1AsJg"
      )
      .then(
        (result) => {
          console.log(result.text);
          cambiarInputNombre("");
          cambiarInputCorreo("");
          cambiarInputTel("");
          cambiarInputMsg("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobamos validacion del formulario ...
    // Si todo es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  // Funcion que se encarga de cambiar el estado del inputCorreo
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  const handleInputTel = (e) => {
    cambiarInputTel(e.target.value);
  };

  const handleInputMsg = (e) => {
    cambiarInputMsg(e.target.value);
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} action="" className="formulario">
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={inputNombre}
            onChange={handleInputNombre}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={inputCorreo}
            onChange={handleInputCorreo}
            required
          />
        </div>

        <div>
          <label htmlFor="Telefono">Teléfono</label>
          <input
            type="number"
            name="telefono"
            placeholder="Telefono"
            id="telefono"
            value={inputTel}
            onChange={handleInputTel}
          />
        </div>

        <div>
          <textarea
            name="consulta"
            as="textarea"
            cols="40"
            rows="10"
            aria-required="true"
            aria-invalid="false"
            placeholder="Dejenos su consulta"
            value={inputMsg}
            onChange={handleInputMsg}
            required
          />
        </div>

        <input className="btnForm" type="submit" value="Enviar" />

{sentForm && (
  <div>
    Tu mensaje ha sido enviado
  </div>
)}




      </form>
    </>
  );
};

export default Formulario;

/* import React, {useState} from "react";
import emailjs from "emailjs-com";
import { ErrorMessage, Formik, Form, Field } from "formik";



const Formulario = () => {

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_o0t5z56', 'template_yy9991s', e.target, 'BsfYLVTbz5mz1AsJg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




const [sendForm, setSendForm] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          telefono: "",
          consulta: "",
        }}
        validate={(valores) => {
          const error = {};


		  //validacion nombre
          if (!valores.nombre) {
            error.nombre = "Por favor ingrese su nombre";
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
error.nombre ='El nombre solo puede contener letras y espacios'

		  }

		  if (!valores.correo) {
            error.correo = "Por favor ingrese su correo";
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
error.correo ='El correo no parece válido'

		  }

          return error;
        }}





		
        onSubmit={(valores, {resetForm}) => {
			resetForm();
          console.log("enviado");
		  setSendForm(true);
		  setTimeout(() => {
      sendEmail(valores)  
      setSendForm(false)  
      }   
      , 5000)
        }}
      >
        {({ values, errors, touched }) => (
          <Form action="" className="formulario" >
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
                
              />
			  <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre} </div>)}/>
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="email"
                name="correo"
                placeholder="Correo"
                id="correo"
               
              />
			  <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo} </div>)}/>
            </div>

            <div>
              <label htmlFor="Telefono">Teléfono</label>
              <Field
                type="number"
                name="telefono"
                placeholder="Telefono"
                id="telefono"
                
              />
			<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono} </div>)}/>

            </div>
            <div>
              <Field
                name="consulta"
				as="textarea"
                cols="40"
                rows="10"
                aria-required="true"
                aria-invalid="false"
                placeholder="Dejenos su consulta"
                
              />
               
              
            </div>

            <button type="submit">Enviar</button>

			{sendForm && <p className="exito"> Formulario enviado con éxito</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
 */
