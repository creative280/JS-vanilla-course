iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');
    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Alejandro');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

