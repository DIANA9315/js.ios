//deducciones seguro social 4% del sueldo, seguro de cea=santia 1%
//asignaciones bono de transporte 50000, bono unico 0.5%
//el programa debe calcular el monto definitivo dedudcciones, asignaciones, monto
// datos de entrada utilizando let y const
const nombreEmpleado = "diana";
const sueldoActual = 2000;
const cargoActual = "supervisor";

let deducciones ;
let asignaciones  ;

let montoDefinitivo ;

//proceso a realizar
deducciones =(0.4 * sueldoActual)+(0.1*sueldoActual);
asignaciones =50000 + (.005*sueldoActual);
montoDefinitivo = (sueldoActual-deducciones)-asignaciones;

//imprimir la salida

console.log ("Nombre del empleado:", nombreEmpleado);
console.log ("Sueldo:", sueldoActual);
console.log ("Cargo:", cargoActual);
console.log ("Deducciones", deducciones);
console.log ("Asignaciones:", asignaciones);
console.log ("Monto definido a recibir", montoDefinitivo);




