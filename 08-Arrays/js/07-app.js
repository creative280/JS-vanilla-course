
// imperativa (modifica el arreglo original)


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

const producto4 = {
    nombre: "Tablet",
    precio: 1000
}

producto3 = {
    nombre: "Teclado",
    precio: 50
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


carrito.unshift(producto3); // Agrega al inicio del arreglo
console.table(carrito);

// // Eliminar ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// // Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);



carrito.splice(1, 1); // Elimina el segundo elemento del arreglo

console.table(carrito);

