function mostrar()
{
	let nota;
	let max;
	let min;

	min = 1;
	max = 10;
	nota = Math.round(Math.random()*(max - min)+min);

	if(nota >= 9){
		alert(`Excelente: ${nota} `);
	}else if(nota >= 4){
		alert(`Aprobo: ${nota}`);
	}else{
		alert(`Vamos la proxima se puede: ${nota}`);
	}

}//FIN DE LA FUNCIÓN