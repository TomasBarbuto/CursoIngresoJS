/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let edad;
	edad = prompt('Ingrese Su Nombre');
	document.getElementById("txtIdNombre").value = edad;
}

