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


// Destucturing con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;

console.log(primero);