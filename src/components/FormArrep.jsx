import React, {useState} from 'react';

const FormArrep = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo electrónico registrado al momento de realizar la compra</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

				<div>
					<label htmlFor="Telefono">Teléfono</label>
					<input
						type="number"
						name="telefono"
						placeholder="Telefono"
						id="telefono"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

                <div>
					<label htmlFor="DNI">Teléfono</label>
					<input
						type="number"
						name="DNI"
						placeholder="Su DNI"
						id="dni"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

                <div>
					<label htmlFor="Fecha">Fecha de compra</label>
					<input
						type="date"
						name="fecha"
						placeholder="fecha de compra"
						id="fecha"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
				<div>
				<textarea name="consulta" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Mensaje opcional"></textarea>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
 
export default FormArrep;