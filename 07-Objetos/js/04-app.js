const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
// Extraer los valores del objeto y ademas crea la variable
const { precio, nombre, disponible } = producto;
console.log(precio);
console.log(nombre);
console.log(disponible);