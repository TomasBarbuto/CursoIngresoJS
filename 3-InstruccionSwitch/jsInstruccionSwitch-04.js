function mostrar()
{
	let mesDelAnio;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio){
		case "Febrero":
			alert('Si tiene 28 dias');
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert('Si tiene 30 dias');
			break;
		default:
			alert('Si tiene 31 dias');
			break;
	}

}//FIN DE LA FUNCIÓN

/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */