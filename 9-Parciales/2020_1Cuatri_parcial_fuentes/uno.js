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
function mostrar() {

	let tipoDeProdcuto;
	let precioDeProducto;
	let cantidadDeUnidadesDeProducto;
	let marcaDelProducto;
	let fabricanteDelProducto;
	let flag;
	let precioAlcoholMasBarato;
	let cantidadAlcoholMasBarato
	let fabricanteAlcoholMasBarato;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let tipoConMasUnidades;
	let promedioDeCompraMayorUnidades;

	flag = 0;

	acumuladorAlcohol = 0;
	contadorAlcohol = 0;

	acumuladorAlcoholMasBarato = 0;
	precioAlcoholMasBarato = 0;

	acumuladorBarbijo = 0;
	contadorBarbijo = 0;

	acumuladorJabon = 0;
	contadorJabon = 0;

	for (let i = 0; i < 2; i++) {

		do {

			tipoDeProdcuto = prompt("Ingrese tipo de producto");

		} while (tipoDeProdcuto != "barbijo" && tipoDeProdcuto != "alcohol" && tipoDeProdcuto != "jabon")

		do {

			precioDeProducto = parseInt(prompt("Ingrese precio de producto"));

		} while (precioDeProducto < 100 || precioDeProducto > 300)

		do {

			cantidadDeUnidadesDeProducto = parseInt(prompt("Ingrese cantidad de productos"));

		} while (cantidadDeUnidadesDeProducto < 1 || cantidadDeUnidadesDeProducto > 1000)

		marcaDelProducto = prompt("ingrese marca del producto");

		fabricanteDelProducto = prompt("ingrese fabricante del producto");

		switch (tipoDeProdcuto) {
			case "barbijo":
				acumuladorBarbijo += cantidadDeUnidadesDeProducto;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabon += cantidadDeUnidadesDeProducto;
				contadorJabon++;
				break;
			case "alcohol":
				acumuladorAlcohol += cantidadDeUnidadesDeProducto;
				contadorAlcohol++;
				if (flag == 0) {
					precioAlcoholMasBarato = precioDeProducto;
					cantidadAlcoholMasBarato = cantidadDeUnidadesDeProducto;
					fabricanteAlcoholMasBarato = fabricanteDelProducto;
					flag = 1;
				} else if (precioAlcoholMasBarato > precioDeProducto) {
					precioAlcoholMasBarato = precioDeProducto;
					cantidadAlcoholMasBarato = cantidadDeUnidadesDeProducto;
					fabricanteAlcoholMasBarato = fabricanteDelProducto;
				}
				break;
		}
	}

	//PUNTO A
	if (acumuladorAlcohol != 0) {
		alert(`del mas barato de los alcoholes se compro ${cantidadAlcoholMasBarato} unidades, y el fabricante es ${fabricanteAlcoholMasBarato}`);
	} else {
		alert("No se compraron alcoholes");
	}

	//PUNTO B
	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
		promedioDeCompraMayorUnidades = acumuladorAlcohol / contadorAlcohol;
		tipoConMasUnidades = "Alcohol";
	} else if (acumuladorBarbijo > acumuladorJabon) {
		promedioDeCompraMayorUnidades = acumuladorBarbijo / contadorBarbijo;
		tipoConMasUnidades = "Barbijos";
	} else {
		promedioDeCompraMayorUnidades = acumuladorJabon / contadorJabon;
		tipoConMasUnidades = "Jabones";
	}

	alert(`El promedio por compra de ${tipoConMasUnidades} es ${promedioDeCompraMayorUnidades} unidades`);

	//PUNTO C
	alert(`${acumuladorJabon} Unidades de jabon`);


}