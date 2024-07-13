const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


console.table(meses);


// cuanto mide un arreglo
console.log(meses.length);


// Iterate over each element in the 'meses' array
for(let i = 0; i < meses.length; i++){
    // Print the value of the current element, in the position 'i'
    console.log(meses[i]);
}