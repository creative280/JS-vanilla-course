// Diferencia entre funciones y metodos, los metodos son funciones que se encuentran dentro de un objeto.

const numero1 = 20;
const numero2 = "20";


console.log(parseInt(numero2)); // Esto es una función

// parseInt es una función que se encuentra dentro del objeto global, en este caso, el objeto global es window.

console.log(numero1.toString()); // Esto es un método

// toString es un método que se encuentra dentro del objeto número1.

