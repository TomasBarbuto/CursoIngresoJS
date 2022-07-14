function mostrar()
{
	let mesDelAnio;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio){
		case "Febrero":
			alert('Este mes no tiene mas de 29 dias');
			break;
		default:
			alert('Es mes tiene 30 o mas dias');
			break;
	}
	
}//FIN DE LA FUNCIÓN

/* al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */