const j= 5; //nocambia

console.log("valor de J antes del if: " + j);//5

if (j > 0) {//5
   const j = 4;//error porque no se puede cambiar//4cambio local no global
    console.log("valor de J dentro del if: " + j);
}

console.log("valor de J despues del if: " + j);//5
