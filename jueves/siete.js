// Definimos la variable de entrada con un valor de ejemplo
const tipo = prompt("Ingresa un tipo (A, B, C o D):").toUpperCase();

// Proceso y salida con Evaluación usando switch
switch (tipo) {
  case "A":
    console.log("Seleccionaste el tipo A");
    break;
  case "B":
    console.log("Seleccionaste el tipo B");
    break;
  case "C":
    console.log("Seleccionaste el tipo C");
    break;
  case "D":
    console.log("Seleccionaste el tipo D");
    break;
  default:
    console.log("Selección incorrecta");
    break;
}
