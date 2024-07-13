const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]



// Iterate over each element in the 'meses' array
for(let i = 0; i < carrito.length; i++){
    // Print the value of the current element, in the position 'i'
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}


// Iterate over each element in the 'meses' array
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

//Foreach y .map son muy parecidos, la diferencia es que .map te crea un nuevo arreglo
//.map te crea un nuevo arreglo
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
