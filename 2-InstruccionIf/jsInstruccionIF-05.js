function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if(edad < 13 || edad > 17){

		alert('No es Adolecente');

	}

}//FIN DE LA FUNCIÓN