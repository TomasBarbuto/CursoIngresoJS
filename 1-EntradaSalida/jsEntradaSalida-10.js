/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro variables
	let importe;
	let descuento;
	let resultado;

	//asigno a la variable el valor ingresado en caja con .value
	importe = parseInt(document.getElementById("txtIdImporte").value);

	descuento = importe * 0.25;

	//Relizamos el calculo
	resultado = importe - descuento;

	//Imprimo por ID el resultado.
	document.getElementById("txtIdResultado").value = resultado;
}
