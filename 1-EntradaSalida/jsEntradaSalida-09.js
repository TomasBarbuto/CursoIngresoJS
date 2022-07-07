/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaro variables
	let sueldo;
	let aumento;
	let resultado;

	//asigno a la variable el valor ingresado en caja con .value
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	aumento = sueldo * 0.10;

	//Relizamos el calculo
	resultado = sueldo + aumento;

	
	document.getElementById("txtIdResultado").value = resultado;

}
