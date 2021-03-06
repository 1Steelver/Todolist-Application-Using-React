import React, { useState } from "react";

const Home = () => {
	const [nuevaTarea, setNuevaTarea] = useState("");
	const [items, setItems] = useState([]);
	function agregar() {
		const item = {
			id: Math.floor(Math.random() * 100),
			value: nuevaTarea,
		};

		setItems((listaVieja) => [...listaVieja, item]);
		setNuevaTarea("");
	}

	function borrado(id) {
		const listaNueva = items.filter((item) => item.id !== id);
		setItems(listaNueva);
	}

	return (
		<div>
			<div class="card">
				<h2 class="card-header">To_do List</h2>
				<div class="card-body">
					<h5 class="card-title">Guarda aca tu tarea</h5>
					<input
						type="text"
						placeholder="Agregar Tarea"
						value={nuevaTarea}
						onChange={(e) => setNuevaTarea(e.target.value)}
					/>

					<button
						type="button"
						class="btn btn-success"
						onClick={() => agregar()}>
						Guardar
					</button>
					<ol>
						{items.map((item) => {
							return (
								<li key={item.id}>
									{item.value}{" "}
									<button
										type="button"
										class="btn btn-danger"
										onClick={() => borrado(item.id)}>
										Borrar
									</button>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default Home;

/*
-------------import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// LOGICA
	const [username, setUsername] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [isShowBotton, setIsShowBotton] = useState(false);

	const handleClick = () => {
		if (username === "") {
			alert("El nombre de usuario no puede estar vacio");
		} else if (contrasena === "") {
			alert(" La contrasena esta vacia");
		} else {
			setIsSuccess(true);
		}
	};
	const handleKeyDown = (e) => {
		console.log(e.key);
		if (e.key === "Enter") {
			console.log("PRESIONO ENTER");
		}
	};
	// FIN LOGICA
	return (
		<div
			onMouseOver={() => setIsShowBotton(true)}
			onMouseLeave={() => setIsShowBotton(false)}>
			<h1>Inicia sesi??n</h1>
			<p>Nombre de usuario: {username}</p>
			<input
				type="text"
				placeholder="Nombre de usuario o correo"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}></input>

			<p>Nombre de contrase??a: {contrasena}</p>
			<input
				type="password"
				placeholder="Nombre de usuario o correo"
				value={contrasena}
				onKeyDown={handleKeyDown}
				onChange={(e) => {
					setContrasena(e.target.value);
				}}></input>
			<div>
				<button className="btn btn-success" onClick={handleClick}>
					{" "}
					Login
				</button>
			</div>
			{isSuccess && (
				<div>
					<div className="alert alert-success" role="alert">
						This is a success alert???check it out!
					</div>
				</div>
			)}
			{isShowBotton && <button>Boton Over</button>}
		</div>
	);
};

export default Home;
*/
