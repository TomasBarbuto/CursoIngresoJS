/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaro variables
	let sueldo;
	let resultado;

	//asigno a la variable el valor ingresado en caja con .value
	sueldo = document.getElementById("txtIdSueldo").value;

	//Relizamos el calculo
	resultado = parseInt(sueldo)*1.10;

	//Imprimo por ID el resultado.
	document.getElementById("txtIdResultado").value = resultado;

}
