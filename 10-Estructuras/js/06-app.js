const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si puedes comprar');
}  else if(!usuario && !puedePagar) {
    console.log('Debes iniciar sesión y no tienes fondos');
} else if(!usuario) {
    console.log('Debes iniciar sesión');
} else if(!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No, no puedes comprar');
}