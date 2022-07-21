/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar(){

	let sexoIngresado;

	sexoIngresado = prompt("ingrese F para femenino ó M para masculino");

	while(sexoIngresado != "m" || sexoIngresado != "f"){
		
		sexoIngresado = prompt("No es valido, ingrese nuevamente");

	}

	document.getElementById("txtIdSexo").value = sexoIngresado; 

}//FIN DE LA FUNCIÓN