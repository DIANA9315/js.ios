// Inicialización del arreglo numérico
const numeros = [10, 20, 30, 40, 50];
let suma = 0; // Inicialización de la variable suma un acumulador

// Recorrido del arreglo con for...of
for (const numero of numeros) {
    console.log(`Valor: ${numero}`);
    suma += numero;
}

// Cálculo del promedio
const promedio = suma / numeros.length;

// Impresión de resultados
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);
