// Arreglo con las notas finales de 10 alumnos
const notas = [5.2, 6.8, 7.5, 4.9, 5.8, 8.0, 6.3, 7.2, 9.0, 3.5];

// Inicialización de variables contadores
let aprobados = 0;
let reprobados = 0;
let sumaAprobados = 0; //acumuladores
let sumaReprobados = 0;

// Recorrido del arreglo de notas
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];//asignacion

    // Condición para aprobado o reprobado
    if (nota >= 6) {
        aprobados++;
        sumaAprobados += nota;
    } else {
        reprobados++;
        sumaReprobados += nota;
    }
}

// Cálculo de los promedios
const promedioGeneral = (sumaAprobados + sumaReprobados) / (aprobados+reprobados);
const promedioAprobados = aprobados > 0 ? sumaAprobados / aprobados : 0;//operador ternario 
const promedioReprobados = reprobados > 0 ? sumaReprobados / reprobados : 0;

// Impresión de resultados
console.log(`Cantidad de aprobados: ${aprobados}`);
console.log(`Cantidad de reprobados: ${reprobados}`);
console.log(`Promedio de aprobados: ${promedioAprobados.toFixed(2)}`);
console.log(`Promedio de reprobados: ${promedioReprobados.toFixed(2)}`);
console.log(`Promedio general de la sección: ${promedioGeneral.toFixed(2)}`);
