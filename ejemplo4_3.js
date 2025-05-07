//programa para procesar un deposito o abono en una cuenta ingresando los valores desde teclado
//utilizando const y let
//agregar mensaje monto nivel oro si el deposito es mayor a 50000const
//  nomCliente = prompt("ingresar nombre: ");
//nivel bronce monto, contario
//si se llama javier el bono sera 5%de incremento del deposito
//imprimir el monto del bono en datos de salida
//similar al anterior pero el bono aplica a numero de cuenta si es =123456
const nomCliente = prompt ("ingresar su nombre de cliente");
const numCuenta = prompt("ingresar su numero de cuenta");
const saldoCuenta =  prompt("ingresar el sueldo de la cuenta");
const montoDeposito = prompt("ingresar el monto de deposito");
let bono = 0
//o 
//bono porque le doy mi valor y mas adelante se debe calcular y cambia el valor 
//proceso a realizar
console.log(typeof saldoCuenta);
console.log(typeof montoDeposito);
//con number ENTEROS Y DECIMALES se transforman a numeros, parseinit pueden ser ambos
let nuevoSaldo = parseFloat(saldoCuenta)+parseFloat(montoDeposito)
nuevoSaldo=nuevoSaldo + (0.01*montoDeposito);

//condicional
if (montoDeposito>50000) {
    alert("felicitaciones su deposito es nivel oro")
} else {
    alert("felicitaciones su deposito es nivel bronce")
}
//calcular un interes adicional del 1% del monto del deposito y sumarlo al nuevo saldo 

//if(nomCliente=="Javier"|| nomCliente==:"javier") {
   // console.log("Entro al if")
   // bono=(montoDeposito*0.05)
//}

if(numCuenta=="123456"){
    console.log("Entro al if")
     bono=(montoDeposito*0.05)
    }
console.log("Nombre de cliente: ",nomCliente);
console.log("Saldo actual: ", saldoCuenta);
console.log("Monto del deposito: ", montoDeposito);
console.log("Nuevo saldo: ", nuevoSaldo);
console.log("Monto del bono: ",bono);

alert("Nombre de cliente: "+nomCliente);
alert("Saldo actual: "+ saldoCuenta);
alert("Monto del deposito: "+montoDeposito);
alert("Nuevo saldo: "+ nuevoSaldo);
alert("Monto del bono:"+bono)
