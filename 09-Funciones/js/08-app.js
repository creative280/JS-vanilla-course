function suma(a, b) {
    return a + b;
}

const resultado = suma(2, 3); // 5

console.log(resultado); // 5


// Ejemplo avanzado

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}


total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);
total = agregarCarrito(400);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);
console.log(total); // 0
