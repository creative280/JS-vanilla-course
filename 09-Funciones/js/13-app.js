const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción: ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción: ${id}`),
    crear_playlist: nombre => console.log(`Creando playlist: ${nombre}`),
    reproducir_playlist: nombre => console.log(`Reproduciendo playlist: ${nombre}`),
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

// el metodo set es para agregar un valor, se le asigna un valor como si fuera una propiedad
reproductor.nuevaCancion = 'Enter Sandman';

// el metodo get es para obtener un valor, no se invoca como una funcion
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crear_playlist('Heavy Metal');
reproductor.crear_playlist('Trash Metal');
reproductor.reproducir_playlist('Heavy Metal');


