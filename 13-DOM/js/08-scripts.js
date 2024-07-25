const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los espacios en blanco son tomados como elementos
// console.log(navegacion.children); // Los elementos son tomados como elementos sin los espacios en blanco

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);


const card = document.querySelector('.card');

// console.log(card.children[0].children[1].textContent);

// // Traversing in the DOM: es recorrer el DOM desde un elemento padre a un hijo o viceversa o de un hermano a otro.


// Traverse the DOM: de hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);


// Traverse the DOM: de hijo a hermano

// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultmoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultmoCard);