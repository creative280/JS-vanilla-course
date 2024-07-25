const navegacion = document.querySelector('.navegacion');

// registrar un evento

// navegacion.addEventListener('click', () => {
//     console.log('click en nav');
// });


navegacion.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
});


navegacion.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
});


// mousedown - similar a click
// click
// dblclick - doble click
// mouseup - cuando sueltas el click
// mouseenter - cuando entras al elemento
// mouseleave - cuando sales del elemento
// mouseover - cuando pasas sobre el elemento
// mouseout - cuando sales del elemento
// mousemove - cuando te mueves sobre el elemento
