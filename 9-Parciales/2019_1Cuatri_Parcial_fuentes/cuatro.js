function mostrar() {
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = parseInt(prompt('Ingrese primer numero'));
    numeroDos = parseInt(prompt('Ingrese segundo numero'));

    if (numeroUno == numeroDos) {

        alert(numeroUno + "  " + numeroDos);

    } else if (numeroUno > numeroDos) {

        resultado = numeroUno - numeroDos;

        if (resultado > 10) {

            alert('la resta es: ' + resultado + ' y superó el 10');

        }

        alert(`El resultado es ${resultado}`);

    } else {

        resultado = numeroUno + numeroDos;

        alert(`El resultado es ${resultado}`);
    }

}