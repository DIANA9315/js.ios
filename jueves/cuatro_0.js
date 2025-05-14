// ejemplo con operador ternario
const edad = 18;
const mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // ➡️ "Mayor de edad"

const color = "rojo";
const favorito = (color === "rojo") ? "Es tu color favorito" : "No es tu color favorito";
console.log(favorito); // ➡️ "Es tu color favorito"

const esActivo = true;
const estado = esActivo ? "Activo" : "Inactivo";
console.log(estado); // ➡️ "Activo"

const num = 1, num1 = 2;
/* */
(num1 = 1 || num1 == 2) ? console.log("num1 es 1 o 2") : console.log("num1 no es 1 ni 2");
/*
if(num1 == 1|| "num1 ==2 "){ console.log("num1 es 1 o 2"); 
 } else {
     console.log("num1 no es 1 ni 2");
    }
    //
*/
(num = 1 && num1 == 2) ? console.log("num es 1 y num1 es 2") : console.log("no se cumple la condicion");


