function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad <= 18 && estadoCivil != 'Soltero'){

		alert('Es muy pequeño para NO ser soltero');

	}else if(edad >= 18 && estadoCivil == 'Soltero'){
		
		alert('Es soltero y no es menor');

	}
	


}//FIN DE LA FUNCIÓN