// ==========================
// Taller de Programación en JavaScript
// ==========================

// Parte 1: Variables
console.log("=== Parte 1: Variables ===");

// Ejercicio 1 – Tipos de variables
let nombre = "Tatiana Alba";
let edad = 34;
let gustaProgramacion = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Me gusta la programación?", gustaProgramacion);

// Ejercicio 2 – Diferencias entre let, const y var
// let
let ciudad = "Bogotá";
console.log("Ciudad inicial:", ciudad);
ciudad = "Bogotá"; // Puedes cambiar si quieres
console.log("Ciudad cambiada:", ciudad);

// const
const pais = "Colombia";
console.log("País:", pais);
// pais = "Brasil"; // Esto daría error porque const no se puede reasignar

// var
var color = "negro";
console.log("Color inicial:", color);
{
    var color = "negro"; // var tiene alcance global o de función, no de bloque
    console.log("Color dentro del bloque:", color);
}
console.log("Color fuera del bloque:", color); // Cambió el valor original

// Diferencia observada: let respeta el alcance de bloque {}, var no.

// Parte 2: Condicionales
console.log("\n=== Parte 2: Condicionales ===");

// Ejercicio 3 – If / Else
let numero = 34;
if (numero >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Ejercicio 4 – Switch
let dia = "viernes";

switch (dia.toLowerCase()) {
    case "lunes":
        console.log("Es lunes, inicio de semana");
        break;
    case "viernes":
        console.log("Es viernes, casi fin de semana");
        break;
    case "sábado":
    case "domingo":
        console.log("Es sábado o domingo, fin de semana");
        break;
    default:
        console.log("Es un día entre semana");
}

// Parte 3: Ciclos
console.log("\n=== Parte 3: Ciclos ===");

// Ejercicio 5 – Ciclo For
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ejercicio 6 – Ciclo While
let repeticiones = 5; // Puedes cambiar este valor o usar prompt() en navegador
let contador = 0;
while (contador < repeticiones) {
    console.log("Hola");
    contador++;
}