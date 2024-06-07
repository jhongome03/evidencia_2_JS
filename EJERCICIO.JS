var nombre = "Pedro"; // Declaración global
console.log(nombre); // Imprime "Pedro"

function saludar() {
  var nombre = "María"; // Declaración local
  console.log(nombre); // Imprime "María"
}

console.log(nombre); // Imprime "Pedro" (variable global)
if (true) {
    let nombre = "Ana";
    console.log(nombre); // Imprime "Ana"
  }
  
  console.log(nombre); // Error: nombre no está definida
  const PI = 3.14159;
  console.log(PI); // Imprime 3.14159
  
  PI = 3.14; // Error: No se puede reasignar una constante
    