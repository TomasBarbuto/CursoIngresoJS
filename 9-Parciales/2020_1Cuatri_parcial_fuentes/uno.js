
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
 */
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let alcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let fabricanteAlcoholMasBarato;
	let cantidadTotalJabones;
	let cantidadTotalBarbijos;
	let cantidadTotalAlcohol;
	let cantidadDeComprasAlcohol;
	let cantidadDeComprasBarbijos;
	let cantidadDeComprasJabones;
	let primerAlcohol;

	alcoholMasBarato = 0;
	fabricanteAlcoholMasBarato = "";
	cantidadAlcoholMasBarato = 0;


	cantidadTotalJabones = 0;
	cantidadTotalBarbijos = 0;
	cantidadTotalAlcohol = 0;

	cantidadDeComprasAlcohol = 0;
	cantidadDeComprasBarbijos = 0;
	cantidadDeComprasJabones = 0;

	primerAlcohol = "si";


	for(let i = 0; i<3 ; i++){

		tipo = prompt("Ingrese el tipo de producto");

		while(tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol"){
			tipo = prompt("Ingrese el tipo de producto");
		}

		precio = parseInt(prompt("Ingrese el precio del producto"));

		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Ingrese el precio del producto"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de unidades"));

		while(cantidad < 0 || cantidad > 1000 || isNaN(cantidad)){
			cantidad = parseInt(prompt("Ingrese la cantidad de unidades"));
		}

		marca = prompt("Ingrese la marca del producto");

		fabricante = prompt("Ingrese el fabricante del producto");

		switch (tipo) {
			case "barbijo":
				cantidadTotalBarbijos += cantidad;
				cantidadDeComprasBarbijos++;
				break;
			case "jabón":
				cantidadTotalJabones += cantidad;
				cantidadDeComprasJabones++;
				break;
			case "alcohol":
				if (primerAlcohol == "si") {
					alcoholMasBarato = precio;
					cantidadAlcoholMasBarato = cantidad;
					fabricanteAlcoholMasBarato = fabricante;
					primerAlcohol = "no";
				}else if(precio < alcoholMasBarato){
					alcoholMasBarato = precio;
					cantidadAlcoholMasBarato = cantidad;
					fabricanteAlcoholMasBarato = fabricante;
				}
				cantidadTotalAlcohol += cantidad;
				cantidadDeComprasAlcohol++;
				break;
		}
	}

	if(cantidadTotalAlcohol == 0){
		alert("No hay alcohol");
	}else{
		alert("El alcohol mas barato es: " + fabricanteAlcoholMasBarato + " con un precio de: " + alcoholMasBarato + " y una cantidad de: " + cantidadAlcoholMasBarato);
	}

	if(cantidadTotalJabones == 0){
		alert("No hay jabones");
	}else{
		alert("La cantidad total de jabones es: " + cantidadTotalJabones);
	}

	if(cantidadTotalAlcohol > cantidadTotalBarbijos && cantidadTotalAlcohol > cantidadTotalJabones){

		alert("El tipo con mas unidades es alcohol con un promedio de compras del: " + (cantidadTotalAlcohol / cantidadDeComprasAlcohol) + " por compra");

	} else if(cantidadTotalBarbijos > cantidadTotalAlcohol && cantidadTotalBarbijos > cantidadTotalJabones){

		alert("El tipo con mas unidades es barbijo con un promedio de compras del: " + (cantidadTotalBarbijos / cantidadDeComprasBarbijos) + " por compra");

	} else if(cantidadTotalJabones > cantidadTotalAlcohol && cantidadTotalJabones > cantidadTotalBarbijos){

		alert("El tipo con mas unidades es jabón con un promedio de compras del: " + (cantidadTotalJabones / cantidadDeComprasJabones) + " por compra");

	}else{

		alert("No hay un tipo con mas unidades");

	}
}