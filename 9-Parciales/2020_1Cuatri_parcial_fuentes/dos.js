/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento.
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
 */

function mostrar() {
  //DECLARACION

  let tipoDeProducto;
  let cantidadDeBolsas;
  let precioPorBolsa;
  let continuar;
  let cantidadDeBolsasTotal;
  let descuento;
  let cantidadArena;
  let precioArena;
  let cantidadCal;
  let precioCal;
  let cantidadCemento;
  let precioCemento;
  let totalBruto;
  let totalConDescuento;
  let tipoConMasCantidadDeBolsas;
  let tipoMasCaroDeBolsa;


  //ASIGNACION
  continuar = ""
  cantidadArena = 0;
  cantidadCal = 0;
  cantidadCemento = 0;
  

  //REALIZACION

  for (let i = 0; i < 3; i++) {
  while (continuar != "no") {

    do {

      tipoDeProducto = prompt("Ingrese tipo de producto (Arena,Cal,Cemento)");

    } while (tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento")

    do {

      precioPorBolsa = parseInt(prompt("Ingrese precio por bolsas (mayor a 0)"));

    } while (precioPorBolsa <= 0)

    cantidadDeBolsas = parseInt(prompt("Ingrese cantidad de bolsas"));

    continuar = prompt("Desea seguir comprando? (si/no)");

    switch (tipoDeProducto) {
      case "arena":
        cantidadArena += cantidadDeBolsas;
        precioArena = precioPorBolsa;
        break;

      case "cal":
        cantidadCal += cantidadDeBolsas;
        precioCal = precioPorBolsa;
        break;

      case "cemento":
        cantidadCemento += cantidadDeBolsas;
        precioCemento = precioPorBolsa;
        break;
    }
  }
}


if (precioArena > precioCal && precioArena > precioCemento) {
  tipoMasCaroDeBolsa = "Arena";
} else if (precioCal > precioCemento) {
  tipoMasCaroDeBolsa = "Cal";
} else {
  tipoMasCaroDeBolsa = "Cemento";
}

if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
  tipoConMasCantidadDeBolsas = "Arena";
} else if (cantidadCal > cantidadCemento) {
  tipoConMasCantidadDeBolsas = "Cal";
} else {
  tipoConMasCantidadDeBolsas = "Cemento";
}

cantidadDeBolsasTotal = cantidadArena + cantidadCal + cantidadCemento;

totalBruto = precioArena * cantidadArena + precioCal * cantidadCal + precioCemento * cantidadCemento;

if (cantidadDeBolsasTotal >= 30) {
  descuento = 0.75;
} else if (cantidadDeBolsasTotal >= 10) {
  descuento = 0.85;
} else {
  descuento = 1;
}

totalConDescuento = totalBruto * descuento;

//MOSTRAR


alert(`El precio bruto es: $${totalBruto}`);
alert(`El precio con descuento es $${totalConDescuento}`);

alert(`El tipo con mas cantidad de bolsas es: ${tipoConMasCantidadDeBolsas}`);
alert(`El tipo mas caro de bolsa es: ${tipoMasCaroDeBolsa}`);
}