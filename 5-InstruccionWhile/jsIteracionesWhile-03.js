/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/


function mostrar() {
	
	let contraseña;

	contraseña = prompt('Ingrese contraseña');

	while (contraseña != "utn750") {
		alert("Contraseña incorrecta");
		contraseña = prompt("Ingrese nuevamente");

	}

} //FIN DE LA FUNCIÓN