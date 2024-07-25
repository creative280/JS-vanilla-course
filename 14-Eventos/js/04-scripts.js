const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log('buscando...');
//     console.log(e.target.method);

// });



formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('Buscando...'); 
}

