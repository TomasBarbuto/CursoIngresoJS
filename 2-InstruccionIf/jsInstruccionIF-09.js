function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let max;
	let min;

	min = 1;
	max = 10;

	numero = Math.round(Math.random() * (max - min) + min);


	alert(numero);

}//FIN DE LA FUNCIÓN