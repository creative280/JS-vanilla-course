localStorage.setItem('nombre', 'juan');
sessionStorage.setItem('nombre', 'Alejandro')


const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}
const productoString = JSON.stringify(producto);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString)
