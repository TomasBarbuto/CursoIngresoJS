/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/

let contador;

contador = 10;

function mostrar() {

	/* 	while(contador >= 1){

			console.log(`Numero: ${contador}`);
			contador = contador - 1;
		} */

	for (contador = 10; contador >= 1; contador--) {
		console.log(`Numero: ${contador}`);
	}

} //FIN DE LA FUNCIÓN