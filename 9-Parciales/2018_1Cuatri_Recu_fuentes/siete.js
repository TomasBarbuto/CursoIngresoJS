function mostrar() {

    let nota;
    let sexo;
    let promedioDeNotas;
    let cantidadDeVarones;
    let acumulador;

    cantidadDeVarones = 0;
    acumulador = 0;


    for (i = 0; i < 5; i++) {
        do {
            nota = parseInt(prompt('Nota:'));
        } while (isNaN(nota) || !(nota > 0 && nota < 10));
        do {
            sexo = prompt("Ingrese f para femenino o m para masculino");
        } while (sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M");

        if ((sexo == "m" || sexo == "M") && nota >= 6) {
            cantidadDeVarones++
        }
        acumulador += nota;

    }
    promedioDeNotas = acumulador / 5;
    alert(`Promedio: ${promedioDeNotas}`);
    alert(`Cantidad de varones con nota mayor o igual a 6: ${cantidadDeVarones}`);

}
