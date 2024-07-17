const autenticado = true;
const puedePagar = true;

// Operador ternario: Es una forma de simplificar un if else en una sola línea ejemplo: condición ? true : false
console.log(autenticado && puedePagar ? 'Si puedes ver Netflix' : 'No puedes ver Netflix'); // Si puedes ver Netflix

// Operador ternario anidado: Es una forma de simplificar un if else anidado en una sola línea ejemplo: condición ? condición ? true : false : false
console.log( autenticado ? puedePagar ? 'Si puedes ver Netflix' : 'No puedes ver Netflix' : 'No estas autenticado'); // Si puedes ver Netflix