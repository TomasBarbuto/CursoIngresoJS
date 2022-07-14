function mostrar(){

	let estacionDelAnio;
	let destino;
	let precioFinal;
	let aumento;
	let descuento;
	const PRECIO = 15000;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionDelAnio){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					precioFinal = PRECIO + (PRECIO * 0.20);
					break;
				case "Mar del plata":
					precioFinal = PRECIO - (PRECIO * 0.20);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = PRECIO - (PRECIO * 0.10);
					break;
			}
	}


}//FIN DE LA FUNCIÓN
/* Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
 */