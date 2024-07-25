// Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');

console.log(header);

// Si se selecciona un elemento por su clase, se obtiene un HTMLCollection, que es similar a un array, pero no es un array. Por lo tanto, no se pueden utilizar métodos de arrays como forEach, map, etc. Para convertir un HTMLCollection en un array, se puede utilizar el método Array.from().


const hero = document.getElementsByClassName('hero');

console.log(hero);


// Si la clase existe mas de una vez en el documento, se seleccionan todos los elementos que tengan esa clase. En este caso, se seleccionan todos los elementos que tengan la clase contenedor.
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);


// Si una clase no existe en el documento, se obtiene un HTMLCollection vacío.
const noExiste = document.getElementsByClassName('no-existe'); 
console.log(noExiste);