let contador = 1; //inicializo el contador
let mensaje = ""; // inicializo el acumulador de mensajes

// ciclo while controlado por un contador
while (contador <= 3) {
    const nombre = prompt(`Ingrese el nombre de la persona Nro ${contador}:`);
    const edad = prompt(`Ingrese la edad de ${nombre}:`);

    // concatenando cada mensaje de cada persona en la iteracion
    mensaje += `Datos Persona Nro ${contador}: Nombre: ${nombre}, Edad: ${edad}\n`;
    contador++; // incremento el contador
}

// mostrando el mensaje acumulado dentro del ciclo while
alert(mensaje);
