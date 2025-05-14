//programa para procesar un deposito o abono en una cuenta ingresando los valores desde teclado
//utilizando const y let
//datos de entrada
const nomCliente = prompt("ingresar nombre: ");
const numCuenta = prompt("ingresar su numero de cuenta");
const saldoCuenta =  prompt("ingresar el sueldo de la cuenta");
const montoDeposito = prompt("ingresar el monto de deposito");

//proceso a realizar
console.log(typeof saldoCuenta);
console.log(typeof montoDeposito);
//con number ENTEROS Y DECIMALES se transforman a numeros, parseinit pueden ser ambos
var nuevoSaldo = Number(saldoCuenta)+Number(montoDeposito);//enteros y parseint y Float para decimales
var nuevoSaldo = parseInt(saldoCuenta)+parseInt(montoDeposito); //enteros 
//impresion de resultados
var nuevoSaldo = parseFloat(saldoCuenta)+parseFloat(montoDeposito)

//calcular un interes adicional del 1% del monto del deposito y sumarlo al nuevo saldo 
let nuevoSaldo = nuevoSaldo +  (0.01*montoDeposito);

console.log("Nombre de cliente: ",nomCliente);
console.log("Saldo actual: ", saldoCuenta);
console.log("Monto del deposito: ", montoDeposito);
console.log("Nuevo saldo: ", nuevoSaldo);

alert("Nombre de cliente: "+nomCliente);
alert("Saldo actual: "+ saldoCuenta);
alert("Monto del deposito: "+montoDeposito);
alert("Nuevo saldo: "+ nuevoSaldo);





