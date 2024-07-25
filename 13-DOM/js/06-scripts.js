const encabezado = document.querySelector('.contenido-hero h1').innerHTML;
console.log(encabezado);




// La diferencia entre innerText y textContent es que innerText no muestra los elementos ocultos con CSS
// console.log(encabezado.innerText);
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML); // Devuelve el HTML


// document.querySelector('.contenido-hero h1').innerHTML = 'Nuevo Encabezado';

const image = document.querySelector('.card img');
console.log(image);

image.src = "img/hacer2.jpg";