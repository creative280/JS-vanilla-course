// QuerySelector, solo trae un elemento del DOM con la especificación que le demos

const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en CSS

const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);


// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);


// Seleccionar elementos por su etiqueta
const navegacion = document.querySelector('nav');
console.log(navegacion);