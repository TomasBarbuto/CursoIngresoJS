function mostrar()
{
	let nota;
	let max;
	let min;

	min = 1;
	max = 10;
	nota = Math.round(Math.random()*(max - min)+min);

	if(nota == 10){
		alert(`${nota} Excelente`);
	}else if(nota >= 4){
		alert(`${nota} Aprobo`);
	}else{
		alert(`${nota} Vamos la proxima se puede`);
	}

}//FIN DE LA FUNCIÓN