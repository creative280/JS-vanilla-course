
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


carrito.push(producto);
carrito.push(producto2);

producto3 = {nombre: "Teclado", precio: 50};

carrito.unshift(producto3); // Agrega al inicio del arreglo

console.table(carrito);