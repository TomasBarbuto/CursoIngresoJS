/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() {

    //declaracion de variables
    let cantidadNumerosPares;
    let ingreseUnNumero;

    //asignacion de valores
    cantidadNumerosPares = 0;
    ingreseUnNumero = parseInt(document.getElementById("txtIdNumero").value);

    //verificacion de valores
    if (ingreseUnNumero < 0) {
        alert("Ingrese un numero positivo");
    } else {
        for (let i = 0; i <= ingreseUnNumero; i++) {
            if (i % 2 == 0) {
                cantidadNumerosPares++;
            }
        }
        alert(cantidadNumerosPares);
    }
}

function NumerosImpares() {

    let cantidadNumerosImpares;
    let ingreseUnNumero;

    cantidadNumerosImpares = 0;

    ingreseUnNumero = parseInt(document.getElementById("txtIdNumero").value);

    if (ingreseUnNumero < 0) {
        alert("Ingrese un numero positivo");
    }

    for (let i = 0; i <= ingreseUnNumero; i++) {

        if (i % 2 != 0) {
            cantidadNumerosImpares++;
        }

    }
    alert(cantidadNumerosImpares);
}

function NumerosDivisibles() {

    let cantidadNumerosDivisibles;
    let ingreseUnNumero;

    cantidadNumerosDivisibles = 0;

    ingreseUnNumero = parseInt(document.getElementById("txtIdNumero").value);

    if (ingreseUnNumero < 0) {
        alert("Ingrese un numero positivo");
    } else {

        for (let i = 0; i <= 100; i++) {

            if (i % ingreseUnNumero == 0) {
                cantidadNumerosDivisibles++;
            }

        }
        alert(cantidadNumerosDivisibles);
    }

}

function VerificarPrimo() {

    let ingreseUnNumero;
    let cantidadDivisores;

    cantidadDivisores = 0;
    ingreseUnNumero = parseInt(document.getElementById("txtIdNumero").value);

   

    if (ingreseUnNumero < 0) {
        alert("Ingrese un numero positivo");
    } else {
        for (let i = 0; i <= ingreseUnNumero; i++) {

            if (ingreseUnNumero % i == 0) {
                cantidadDivisores++
            }
        }
        if (cantidadDivisores == 2) {
            alert(`Es un numero primo`);
        } else {
            alert(`No es un numero primo`);
        }
    }
}

function NumerosPrimos() {

    let ingreseUnNumero;
    let cantidadDivisores;
    let cantidadDeNumerosPrimos;

    cantidadDeNumerosPrimos = 0;
    ingreseUnNumero = parseInt(document.getElementById("txtIdNumero").value);

    if (ingreseUnNumero < 0) {
        alert("Ingrese un numero positivo");
    } else {
        for (let i = 0; i <= ingreseUnNumero; i++ ){
            cantidadDivisores= 0;
            for (let x = 0; x <= i; x++) {
                if (i % x == 0) {
                    cantidadDivisores++
                }
            }
            if (cantidadDivisores == 2) {
                cantidadDeNumerosPrimos++;
            } 
        }
        alert('Cantida de numeros primos: ' + cantidadDeNumerosPrimos);
    }
}

