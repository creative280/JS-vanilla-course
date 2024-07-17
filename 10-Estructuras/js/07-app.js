const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;


if (totalPagar < efectivo || totalPagar < credito || totalPagar < disponible) {
    console.log('Si puedes pagar');
} else {
    console.log('No puedes pagar');
}