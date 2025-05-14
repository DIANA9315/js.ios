// uso del alert para mostrar un mensaje al usuario en varias lineas
alert("Hola, vamos a capturar los datos de tu mascota para su registro!. \nPor favor sigue las instrucciones.");

//entrada de datos
let nombreMascota = prompt("¿Cual es el nombre de tu mascota?");
let tipoMascota = prompt("¿Que tipo de mascota es?");
let razaMascota = prompt("¿Que raza es tu mascota?");
let edadMascota = prompt("¿Cuantos años tiene tu mascota?");
let pesoMascota = prompt("¿Cual es el peso de tu mascota?");
let colorMascota = prompt("¿De que color es tu mascota?");

// procesamiento de datos
let informacion = "Nombre: " + nombreMascota + "\nTipo: " + tipoMascota + "\nRaza: " + razaMascota + "\nEdad: " + edadMascota + "\nPeso: " + pesoMascota + "\nColor: " + colorMascota;

// Confirmar si los datos son correctos, devuelve un true o false
let confirmacion = confirm(informacion + "\n¿Son correctos los datos ingresados?");

// salida de datos o resultados

// evaluar un condicional simple. la condicion es una variable booleana
if (confirmacion) {
    alert("¡Gracias! Los datos han sido registrados.");
} else {
    alert("Por favor, recarga la pagina y vuelve a ingresar los datos.");
} 