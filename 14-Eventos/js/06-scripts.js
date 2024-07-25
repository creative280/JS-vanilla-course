// Event Bubbling: Se refiere a la propagación de eventos de un elemento hijo a un elemento padre.

// Event Delegation: Se refiere a la propagación de eventos de un elemento padre a un elemento hijo.
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en titulo');
});
// Event Delegation
document.body.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en body');
});
// Event Bubbling
// document.body.addEventListener('click', (e) => {
//     e.stopPropagation();