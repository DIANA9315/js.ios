// Solicitar los tres datos de entrada
const dato1 = parseFloat(prompt("Ingresa el primer número:"));
const dato2 = parseFloat(prompt("Ingresa el segundo número:"));
const dato3 = parseFloat(prompt("Ingresa el tercer número:"));
//parseFloat, convertirlo  a numero
// Variables para los resultados
let resultado1, resultado2, resultado3;

// Evaluar el si el tercer dato es mayor a 10 con un condicional
if (dato3 > 10) {
    resultado1 = dato1 + dato2 + dato3;
    resultado2 = dato1 * dato2 * dato3;
    resultado3 = (dato1 + dato2) / dato3;
} else {
    resultado1 = (dato1 + dato2 + dato3)*2;
    resultado2 = (dato1 * dato2 * dato3)/2;
    //resultado3 = (dato1 + dato2) / (dato3||1); // Evitar división por cero
    /*if (dato3 == 0) {
        resultado3 = "No se puede dividir por cero";
    } else {
        resultado3 = (dato1 + dato2) / dato3;
    }*/
   //operador ternal  como condiciones
   (dato3== 0) ? resultado3 = "No se puede dividir por cero" :resultado3 = (dato1 + dato2) / dato3;
    }



// Imprimir los resultados
console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
