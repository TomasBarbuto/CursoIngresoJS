/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let legajo;
	let nacionalidad;
	
	//TESTING
/* 	edad = "18";
	sexo = "M";
	estadoCivil = "1";
	sueldoBruto = "8000";
	legajo = 5000;
 */
	
	// EDAD

	edad = parseInt(prompt("Ingrese una edad entre 18 y 90 años"));

	while(edad < 18 || edad > 90 || isNaN(edad))
	{
		edad = parseInt(prompt("Ingrese una edad entre 18 y 90 años"));
	}
	
	document.getElementById("txtIdEdad").value = edad;
	
	// SEXO

	sexo = prompt("Ingrese F para femenino o M para masculino");

	while(sexo != "M" && sexo != "F"){
		sexo = prompt("Ingrese F para femenino o M para masculino");
	} 

	if(sexo == "M"){
		document.getElementById("txtIdSexo").value = "Masculino";
	} else {
		document.getElementById("txtIdSexo").value = "Femenino";
	} 

	//ESTADO CIVIL
	
	estadoCivil = parseInt(prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	
	while( estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil)){
		estadoCivil = parseInt(prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	}

	switch(estadoCivil){
		case 1:
			document.getElementById("txtIdEstadoCivil").value = "Soltero";
			break;
		case 2:
			document.getElementById("txtIdEstadoCivil").value = "Casado";
			break;
		case 3:
			document.getElementById("txtIdEstadoCivil").value = "Divorciado";
			break;
		case 4:
			document.getElementById("txtIdEstadoCivil").value = "Viudo";
			break;
	}

	//SUELDO BRUTO

	sueldoBruto = parseInt(prompt("Ingrese un sueldo bruto mayor a $8000"));
	
	while(sueldoBruto < 8000 || isNaN(sueldoBruto)){
		sueldoBruto = parseInt(prompt("Ingrese un sueldo bruto mayor a $8000"));
	}
	
	document.getElementById("txtIdSueldo").value = sueldoBruto;

	//LEGAJO
	
	legajo = parseInt(prompt("Ingrese un legajo de 4 cifras"));
	
	while(legajo < 1000 || legajo > 9999){
		legajo = parseInt(prompt("Ingrese un legajo de 4 cifras"));
	}

	document.getElementById("txtIdLegajo").value = legajo;

	//NACIONALIDAD

	nacionalidad = prompt("Ingrese: A para argentinos, E para extranjeros, N para nacionalizados.");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		nacionalidad = prompt("Ingrese: A para argentinos, E para extranjeros, N para nacionalizados.");
	}

	switch(nacionalidad){
		case "A":
			document.getElementById("txtIdNacionalidad").value = "Argentino";
			break;
		case "E":
			document.getElementById("txtIdNacionalidad").value = "Extranjero";
			break;
		case "N":
			document.getElementById("txtIdNacionalidad").value = "Nacionalizado";
			break;
	}
}