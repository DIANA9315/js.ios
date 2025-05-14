// datos de entrada
let nombreMascota = prompt('Escribe el nombre de tu mascota');
let colorMascota = prompt('Escribe el color de tu mascota:');
let razaMascota = prompt('Escribe la raza de tu mascota:');
let edadMascota = prompt('Escribe la edad de tu mascota:');
let sexoMascota = prompt('Escribe el sexo de tu mascota:');
let esterilizada = prompt('¿Tu mascota está esterilizada? (true/false)');

//proceso y salida de datos, uso de alert para mostrar un mensaje al usuario en varias lineas
// construccion de mensaje aplicando concatenacion de cadenas o strings
alert('Los datos de tu mascota son: \n' +
    'Nombre: ' + nombreMascota + '\n' +
    'Color: ' + colorMascota + '\n' +
    'Raza: ' + razaMascota + '\n' +
    'Edad: ' + edadMascota + '\n' +
    'Sexo: ' + sexoMascota + '\n' +
    'Esterilizada: ' + esterilizada);