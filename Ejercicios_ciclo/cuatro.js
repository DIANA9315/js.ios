// Ciclo que se repite 5 veces iterando hacia arriba 
//Inicializacion de un contador y un acumulador
let c=0, a=0

for (let i = 1; i <= 5; i=+1) {  //++es equivalente a escribir i=i+1
    console.log(i); 
    /*c++c*/=c+1; //aqui se incrementa el contador
   /*a+=i*/ a=a+i; //aqui estamos incrementando el acumulador

}

console.log("El valor del contador = ", c);
console.log("La suma de los primeros 5 numeros =", a);
