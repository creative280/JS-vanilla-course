const busqueda = document.querySelector('.busqueda');


//keydown: cuando se presiona una tecla y se mantiene presionada
busqueda.addEventListener('keydown', (e) => {
   console.log('Escribiendo...')
});

//keyup: cuando se suelta la tecla
busqueda.addEventListener('keyup', () => {
   console.log('Soltando la tecla...');
});

// blur: cuando se sale del input
busqueda.addEventListener('blur', () => {
   console.log('Saliendo del input...');
});

// copy: cuando se copia el texto
busqueda.addEventListener('copy', () => {
   console.log('Texto copiado...');
});

// paste: cuando se pega el texto
busqueda.addEventListener('paste', () => {
   console.log('Texto pegado...');
});

// cut: cuando se corta el texto
busqueda.addEventListener('cut', () => {
   console.log('Texto cortado...');
});

// input: cuando se escribe en el input
busqueda.addEventListener('input', () => {
   console.log('Escribiendo en el input...');
});

// change: cuando se cambia el valor del input
busqueda.addEventListener('change', () => {
   console.log('Cambiando el valor del input...');
});

// e.target.value: para obtener el valor del input en tiempo real
busqueda.addEventListener('input', (e) => {
    console.log('e.target.value');
 });