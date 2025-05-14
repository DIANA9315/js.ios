let mensaje = "";

for (let i = 1; i <= 3; i++) {
    // usando prompt con interpolacion o template string
    const nombre = prompt(`Ingrese el nombre de la persona Nro ${i}:`);
    const edad = prompt(`Ingrese la edad de ${nombre}:`);

    // concatenando cada mensaje de cada persona en la iteracion
    // como un acumulador de strings
    mensaje = mensaje + `Datos Persona Nro ${i}: Nombre: ${nombre}, Edad: ${edad}\n`;
}

// mostrando el mensaje acumulado dentro del ciclo for
alert(mensaje);

alert("Fin del ciclo y del programa");