const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,

    mostrarInfo: function() {
        console.log(`El producto: ${nombre} tiene un precio de: ${precio}`);
    }
}

// La palabra reservada 'this' se refiere al objeto actual, en este caso 'producto'.

producto.mostrarInfo();