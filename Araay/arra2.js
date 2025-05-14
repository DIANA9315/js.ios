// Inicialización del arreglo numérico
const numeros = [10, 20, 30, 40, 50];
let suma = 0; // Inicialización de la variable suma un acumulador

// Recorrido del arreglo con for...in (iterando sobre índices)
for (const indice in numeros) {
    console.log(`Valor en posición ${indice}: ${numeros[indice]}`);
    suma += numeros[indice];
}

// Cálculo del promedio
const promedio = suma / numeros.length;

// Impresión de resultados
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);
