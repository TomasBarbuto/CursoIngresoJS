function mostrar()
{
    let precio;
    let porcentaje;
    let descuento;
    let precioFinal;

    precio = parseFloat(prompt('Ingrese Precio'));
    porcentaje = parseInt(prompt('Ingrese porcentaje de descuento'));
    descuento = precio * porcentaje / 100;
    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
