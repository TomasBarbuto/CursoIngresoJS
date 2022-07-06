/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2; 

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	alert(`La suma es: ${parseInt(num1)+parseInt(num2)}`);
}

function restar()
{
	let num1;
	let num2; 

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	alert(`La resta es: ${parseInt(num1)-parseInt(num2)}`);
}

function multiplicar()
{ 
	let num1;
	let num2; 

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	alert(`La multiplacion es: ${parseInt(num1)*parseInt(num2)}`);
}

function dividir()
{
	let num1;
	let num2; 

	num1= document.getElementById("txtIdNumeroUno").value;
	num2= document.getElementById("txtIdNumeroDos").value;

	alert(`La division es: ${parseInt(num1)/parseInt(num2)}`);
}

