let totalSalarios = 0;
let cantidadEmpleados = 0;
let continuar = true;
let mensaje = "";//nombre cargo y salario

while (continuar) { //mientras sea continuar es true
    // Solicitar nombre, cargo y salario
    const nombre = prompt("Ingrese el nombre del empleado:");
    const cargo = prompt("Ingrese el cargo del empleado:");
    const salario = parseFloat(prompt("Ingrese el salario del empleado:"));

    // Validación para asegurar que el salario sea un número válido
    if (!isNaN(salario)) { //que sea numerico 
        totalSalarios += salario;
        cantidadEmpleados++;
        mensaje += `Nombre: ${nombre}, Cargo: ${cargo}, Salario: ${salario.toFixed(2)}\n`;
    } else {
        alert("El salario ingresado no es válido. Intente nuevamente.");
    }

    // Preguntar si desea continuar
    continuar = confirm("¿Desea ingresar más empleados?");
}

// Calcular el salario promedio
const salarioPromedio = cantidadEmpleados > 0 ? totalSalarios / cantidadEmpleados : 0;

// Mostrar lista acumulada de empleados
alert(`Lista de empleados:\n${mensaje}`);

// Mostrar el salario promedio
alert(`El salario promedio de los empleados es: ${salarioPromedio.toFixed(2)}`);
