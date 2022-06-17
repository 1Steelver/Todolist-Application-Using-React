import React, { useState } from "react";

const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);
	function agregar() {
		if (!newItem) {
			alert("Enter an item");
			return;
		}
		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem, //we get this from the input
		};

		setItems((oldList) => [...oldList, item]);
		setNewItem("");
		console.log(items);
	}

	function borrado(id) {
		const listaNueva = items.filter((item) => item.id !== id);
		setItems(listaNueva);
	}

	return (
		<center>
			<h1>Todolist</h1>
			<input
				type="text"
				placeholder="Agregar Tarea"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button onClick={() => agregar()}>guardar</button>
			<ul>
				{items.map((item) => {
					return (
						<li key={item.id}>
							{item.value}{" "}
							<button onClick={() => borrado(item.id)}>
								{" "}
								X{" "}
							</button>
						</li>
					);
				})}
			</ul>
			<h2>Todolist</h2>
	
		</center>
		
	);
};

export default Home; /*import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState(false);
	const [tareanueva, setTareaNueva] = useState("");

	const handleKeyEnter = (e) => {
		let newTodo = [...tarea, nuevatarea];
		if (e.key === "Enter") {
			setTarea(newTodo);
			setTareaNueva("");
		}
	};

	const borrado = (id) => {
		const Ntodo = tarea.filter((item) => item.id !== id);
		setTarea(Ntodo);
	};

	return (
		<div>
			<div style={{ margintop: "12px" }}>
				<h1 className="text-center">Lista de Tareas</h1>
			</div>
			<div>
				<input
					type="text"
					placeholder="tarea"
					value={tareanueva}
					onChange={(e) => {
						setTareaNueva(e.target.value); //se trae el target y el value del evento(e),es decir e valor del input.
					}}
					onKeyDown={handleKeyEnter}></input>
			</div>
			<ul className="ist-group">
				{tarea.map((item, index) => (
					<li
						onMouseOver={() => setIsShowX(true)} //si el mouse pase por aca...mostra la x
						onMouseLeave={() => setIsShowX(false)} //cuando e mouse no este aca...no muestres la x
						key={index}
						className="list-group-item"
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						{item}
						{isShowX && (
							<button
								className="btn-btn-daner"
								onClick={() => borrado(index)}>
								x
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
----------------------------------------------------------------------
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
			<h1>Inicia sesión</h1>
			<p>Nombre de usuario: {username}</p>
			<input
				type="text"
				placeholder="Nombre de usuario o correo"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}></input>

			<p>Nombre de contraseña: {contrasena}</p>
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
						This is a success alert—check it out!
					</div>
				</div>
			)}
			{isShowBotton && <button>Boton Over</button>}
		</div>
	);
};

export default Home;
*/
