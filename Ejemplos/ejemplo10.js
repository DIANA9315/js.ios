//programa para procesar un deposito o abono en una cuenta

//datos de entrada
var nomCliente = prompt("ingresar nombre: ");
var numCuenta = prompt("ingresar su numero de cuenta");
var saldoCuenta =  prompt("ingresar el sueldo de la cuenta");
var montoDeposito = prompt("ingresar el monto de deposito");

//proceso a realizar
console.log(typeof saldoCuenta);
console.log(typeof montoDeposito);
//con number ENTEROS Y DECIMALES se transforman a numeros, parseinit pueden ser ambos
var nuevoSaldo = Number(saldoCuenta)+Number(montoDeposito);//enteros y parseint y Float para decimales
var nuevoSaldo = parseInt(saldoCuenta)+parseInt(montoDeposito); //enteros 
//impresion de resultados
var nuevoSaldo = parseFloat(saldoCuenta)+parseFloat(montoDeposito)
console.log("Nombre de cliente: ",nomCliente);
console.log("Saldo actual: ", saldoCuenta);
console.log("Monto del deposito: ", montoDeposito);
console.log("Nuevo saldo: ", nuevoSaldo);

alert("Nombre de cliente: "+nomCliente);
alert("Saldo actual: "+ saldoCuenta);
alert("Monto del deposito: "+montoDeposito);
alert("Nuevo saldo: "+ nuevoSaldo);
