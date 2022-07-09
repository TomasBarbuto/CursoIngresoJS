function mostrar()
{
    let parejaUno;
    let parejaDos;
    let pesoParejaUno;
    let pesoParejaDos;
    let sumaDePesos;
    let promedio;

    parejaUno = prompt('Ingrese nombre pareja uno');
    pesoParejaUno = parseInt(prompt('Ingrese nombre peso pareja uno'));
    parejaDos = prompt('Ingrese nombre pareja dos');
    pesoParejaDos = parseInt(prompt('Ingrese nombre peso pareja dos'));
    sumaDePesos = pesoParejaUno + pesoParejaDos
    promedio = sumaDePesos/2;

    alert(`ustedes se llaman ${parejaUno} y ${parejaDos} pesan ${pesoParejaUno} y ${pesoParejaDos} kilos, que sumados son ${sumaDePesos} kilos y el promedio de peso es ${promedio} kilos`);
  
}
