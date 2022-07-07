/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro variables
	let importe;
	let resultado;

	//asigno a la variable el valor ingresado en caja con .value
	importe = document.getElementById("txtIdImporte").value;

	//Relizamos el calculo
	resultado = parseInt(importe)*0.75;

	//Imprimo por ID el resultado.
	document.getElementById("txtIdResultado").value = resultado;
}
