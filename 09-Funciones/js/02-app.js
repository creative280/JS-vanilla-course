// Diferencia entre Function Declaration y Function Expression
// La principal diferencia entre Function Declaration y Function Expression es que las funciones declaradas se pueden llamar antes de que se declaren, mientras que las funciones expresadas no se pueden llamar antes de que se declaren.

sumar(); // 4
function sumar() {
    console.log(2 + 2);
}

// Expresión de función (Function Expression)
sumar2(); // 6
const sumar2 = function() {
    console.log(3 + 3);
}
