import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";

const Formulario = () => {
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
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            error.nombre = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.correo) {
            error.correo = "Por favor ingrese su correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            error.correo = "El correo no parece válido";
          }

          return error;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("enviado");
          setSendForm(true);
          setTimeout(() => setSendForm(false), 5000);
        }}
      >
        {({ values, errors, touched }) => (
          <Form action="" className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre} </div>}
              />
            </div>

            <div>
              <label htmlFor="correo">
                Correo electrónico registrado al momento de realizar la compra
              </label>
              <Field
                type="email"
                name="correo"
                placeholder="Correo"
                id="correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo} </div>}
              />
            </div>

            <div>
              <label htmlFor="Telefono">Teléfono</label>
              <Field
                type="number"
                name="telefono"
                placeholder="Telefono"
                id="telefono"
              />
              <ErrorMessage
                name="telefono"
                component={() => (
                  <div className="error">{errors.telefono} </div>
                )}
              />
            </div>

            <div>
              <label htmlFor="Fecha">Fecha de compra</label>
              <Field
                type="date"
                name="fecha"
                placeholder="fecha de compra"
                id="fecha"
                
              />
            </div>
            <div>
              <Field
                name="mensaje"
                as="textarea"
                cols="40"
                rows="10"
                aria-required="true"
                aria-invalid="false"
                placeholder="Mensaje opcional"
              />
            </div>

            <button type="submit">Enviar</button>

            {sendForm && <p className="exito"> En breve nos contactaremos con usted</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;


  /* <div>
					<label htmlFor="Fecha">Fecha de compra</label>
					<input
						type="date"
						name="fecha"
						placeholder="fecha de compra"
						id="fecha"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div> */

