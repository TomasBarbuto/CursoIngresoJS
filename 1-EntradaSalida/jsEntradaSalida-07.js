/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultado;

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1)+parseInt(num2);

	alert(`La suma es: ${resultado}`);
}

function restar()
{
	let num1;
	let num2; 
	let resultado;

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1)-parseInt(num2);

	alert(`La resta es: ${resultado}`);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1)*parseInt(num2);

	alert(`La multiplacion es: ${resultado}`);
}

function dividir()
{
	let num1;
	let num2; 
	let resultado;

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1)/parseInt(num2);

	alert(`La division es: ${resultado}`);
}

