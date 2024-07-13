'use strict';

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


Object.freeze(producto); // No se puede modificar ni agregar ni eliminar propiedades

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));




