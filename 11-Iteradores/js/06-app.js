// forEach: Itera sobre un arreglo


const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];


// forEach
pendientes.forEach( (pendiente, index) => {
    console.log(`${index}: ${pendiente}`);
});


const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
];

carrito.forEach( (producto, index) => {
    console.log(`${index}: ${producto.nombre} - Precio: ${producto.precio}`);
});


carrito.map( (producto, index) => {
    console.log(`${index}: ${producto.nombre} - Precio: ${producto.precio}`);
});

// diferencia entre forEach y map, es que map crea un nuevo arreglo y forEach no.