const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Spread Operator
// declara un nuevo arreglo con los elementos del arreglo original y agrega un nuevo elemento

// declarativa (no modifica el arreglo original)
// Expresa la logica de la operacion sin describir el flujo de control

let resultado;
resultado = [...carrito, producto]; // agrega producto al final del arreglo

resultado = [...resultado,producto2]; // agrega producto2 al final del arreglo

resultado = [producto3, ...resultado /* esta es la copia de la variable */ ]; // agrega producto3 al inicio del arreglo



console.table(resultado);

