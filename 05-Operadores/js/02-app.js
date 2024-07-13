const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos números son iguales

console.log(numero1 == numero2); // true
console.log(numero1 === numero2); // false
console.log(numero1 === parseInt(numero2)); // true

console.log(typeof numero1);    // number
console.log(typeof numero2);    // string


// Diferente de...
console.log(numero1 != numero3); // true
console.log(numero1 !== numero3); // true

