const producto = 'Monitor 20 pulgadas';


// Replace
console.log(producto.replace('pulgadas', '"'));

console.log(producto.replace('Monitor', 'Monitor curvo'));

// Slice
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); // No hace nada

/*
    slice si tienes un valor mayor al segundo valor, no hace nada
    substring si tienes un valor mayor al segundo valor, lo toma como el segundo valor
*/


// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2,1));


const usuario = "Juan";
// charAt
console.log(usuario.charAt(0));