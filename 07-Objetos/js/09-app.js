'use strict';

// la diferencia entre freeze y seal es que seal si permite modificar las propiedades existentes, pero no permite agregar ni eliminar propiedades del objeto.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto);

producto.disponible = false;

console.log(producto);