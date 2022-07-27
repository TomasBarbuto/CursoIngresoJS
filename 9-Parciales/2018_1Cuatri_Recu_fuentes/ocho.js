function mostrar() {

    let datoLetra;
    let mensajeUsuario;
    let datoNumero;
    let cantidadPares;
    let cantidadImpares;
    let cantidadCeros;
    let AcumuladorPositivo;
    let AcumuladorNegativo;
    let cantidadPositivos;
    let cantidadNegativos;
    let promedioPositivos;
    let promedioNegativos;
    let numeroMaximo;
    let numeroMinimo;
    let flag;

    cantidadPares = 0;
    cantidadImpares = 0;
    cantidadCeros = 0;
    cantidadPositivos = 0;
    cantidadNegativos = 0;
    AcumuladorNegativo = 0;
    AcumuladorPositivo = 0;
    flag = 0;

    do {

        do {
            datoNumero = prompt("Ingrese un numero entre -100 y 100");
        } while (isNaN(datoNumero) || datoNumero < -100 || datoNumero > 100);

        datoLetra = prompt("Ingrese una letra de A a Z");

        if (flag == 0) {

            numeroMaximo = datoNumero;
            numeroMinimo = datoNumero;

            flag = 1;
        }

        if (datoNumero % 2 == 0) {
            cantidadPares++
        } else {
            cantidadImpares++

        }
        if (datoNumero == 0) {

            cantidadCeros++
        } else if (datoNumero > 1) {
            AcumuladorPositivo += parseInt(datoNumero);
            cantidadPositivos++

        } else {

            AcumuladorNegativo += parseInt(datoNumero);
            cantidadNegativos++
        }

        mensajeUsuario = prompt("Desea seguir ingrensando datos? Ingrese S para Si o N para No");

    } while (mensajeUsuario == "S" || mensajeUsuario == "s");

    promedioPositivos = AcumuladorPositivo / cantidadPositivos;

    promedioNegativos = AcumuladorNegativo / cantidadNegativos;

    console.log(`Cantidad de pares = ${cantidadPares}`);
    console.log(`Cantidad de impares = ${cantidadImpares}`);
    console.log(`Cantidad de ceros = ${cantidadCeros}`);
    console.log(`Promedio de numeros Positivos ${promedioPositivos}`);
    console.log(`Promedio de numero Negativos ${promedioNegativos}`);
    console.log(`Numero maximo ingresado: ${numeroMaximo}`);
    console.log(`Numero minimo ingresado: ${numeroMinimo}`);


}
