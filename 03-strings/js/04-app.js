const producto = '                Monitor 20 pulgadas                 ';
console.log(producto);
console.log(producto.length); 

// Eliminar del inicio...
console.log(producto.trimStart());

// Eliminar del final...
console.log(producto.trimEnd());

console.log(producto.trimEnd().trimStart());


// Eliminar del inicio y del final...
console.log(producto.trim());