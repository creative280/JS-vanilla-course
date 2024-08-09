// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');


const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Generar un ojeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);


    // Llena las opciones de año
    llenarSelect();
})

// Eventos para manejar los select de los filtros
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)

    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value

    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value

    filtrarAuto();
});


// Funciones
function mostrarAutos(autos){

    limpiarHTML(); // Limpiar HTML Previo

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `

        // Insertar HTML
        resultado.appendChild(autoHTML)

    })
};

// Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect() {
    for( let i = maxYear; i > minYear; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
};


// Funcion que filtra con base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarPuertas).filter(filtrarTrasnmision).filter(filtrarColor)
    // console.log(resultado)



    if( resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado()
    }
};

function noResultado(){

    limpiarHTML();


    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay resultados, intenta de nuevo";
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === year;
    }
    return auto;
}

function filtrarYear(auto) {
    const { minimo } = datosBusqueda;
    if( minimo ){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { maximo } = datosBusqueda;
    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTrasnmision(auto) {
    const { transmision } = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto;
}


function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if( color ){
        return auto.color === color;
    }
    return auto;
}