// Inicialización del arreglo numérico
const numeros = [10, 20, 30, 40, 50];
let suma = 0;

// Recorrido del arreglo con forEach
numeros.forEach((valor, indice) => {
    console.log(`Valor en posición ${indice}: ${valor}`);
    suma += valor;
});

// Cálculo del promedio
const promedio = suma / numeros.length;

// Impresión de resultados
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);
