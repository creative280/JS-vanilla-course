function sumar(a,b) { // a y b son parametros
    console.log( a + b );
}

sumar(4, 6) // 4 y 6 son argumentos

sumar(200, 184) // 200 y 184 son argumentos

sumar(153, 536) // 3 y 5 son argumentos

// para hacer el comando de comilla invertida es con alt + 96 `` y alt gr + }

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}


saludar("Alejandro", "Taborda");

saludar(); // Si no se le pasa ningun argumento, el valor de los parametros es undefined.