/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/* function CalcularPrecio (){
 	let cantidadDeLamparas;
    let valorLampara;
    let marca;
    let descuento;
    let precioConDescuento;
    let precioFinal;
    let impuestoIngresosBrutos;
    let ingresosBrutos;
    

    valorLampara = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    ingresosBrutos = 10;
    precioFinal = cantidadDeLamparas * valorLampara;


    if(cantidadDeLamparas >= 6){
        descuento = precioFinal * 50 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 5 && marca == "ArgentinaLuz"){
        descuento = precioFinal * 40 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 5 && marca != "ArgentinaLuz"){
        descuento = precioFinal * 30 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        descuento = precioFinal * 25 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")){
        descuento = precioFinal * 20 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 3 && marca == "ArgentinaLuz"){
        descuento = precioFinal * 15 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 3 && marca == "FelipeLamparas"){
        descuento = precioFinal * 10 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")){
        descuento = precioFinal * 5 / 100;
        precioConDescuento = precioFinal - descuento;
    }else if(cantidadDeLamparas <= 2){
        precioConDescuento = precioFinal;
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    if(precioConDescuento >= 120){
        impuestoIngresosBrutos = precioFinal*ingresosBrutos/100;
        alert(`Usted pago ${impuestoIngresosBrutos} de IIBB.`);
    }
} */

function CalcularPrecio() {

    let cantidadDeLamparas;
    let marca;
    const PRECIO = 35;
    let descuento;
    let precioFinal;
    const INGRESOSBRUTOS = 0.10;
    let impuesto;

    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioFinal = cantidadDeLamparas * PRECIO;

    switch (cantidadDeLamparas) {
        case 1:
        case 2:
            descuento = 1;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 0.85;
            } else if (marca == "FelipeLamparas") {
                descuento = 0.90;
            } else {
                descuento = 0.95;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 0.75;
            } else {
                descuento = 0.80;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 0.60;
            } else {
                descuento = 0.70;
            }
            break;
        default:
            descuento = 0.50;
            break;
    }
    
    precioFinal = precioFinal * descuento;

    if(precioFinal >= 120){
        impuesto = precioFinal * INGRESOSBRUTOS;
        alert(`”IIBB Usted pago ${impuesto}`);
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}