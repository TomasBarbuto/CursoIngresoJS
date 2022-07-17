/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar(){

	let sexoIngresado;

	sexoIngresado = prompt("ingrese F para femenino ó M para masculino");

	while(!(sexoIngresado != "F" || sexoIngresado != "M")||!(sexoIngresado != "f" || sexoIngresado != "m")){
		sexoIngresado = prompt("No es valido, ingrese nuevamente");

	}

	document.getElementById("txtIdSexo").value = sexoIngresado; 

}//FIN DE LA FUNCIÓN