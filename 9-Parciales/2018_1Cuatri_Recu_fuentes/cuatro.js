function mostrar() {

    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = prompt("Ingrese el primer numero");
    numeroDos = prompt("Ingrese el segundo numero");

    if (numeroUno == numeroDos) {
        alert(numeroUno + " +" + numeroDos);
    } else if (numeroUno > numeroDos) {
        if (numeroDos != 0) {
            resultado = numeroUno / numeroDos;
            alert(resultado);
        } else {
            alert("No se puede dividir por 0");
        }
    } else {
        resultado = parseInt(numeroUno) + parseInt(numeroDos);
        alert(resultado);
        if (resultado < 50) {
            alert(`la suma es ${resultado} y es menor a 50`);
        }
    }


}
