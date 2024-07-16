const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción: ${id}`);
    },
    crear_playlist: function(nombre) {
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducir_playlist: function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`);
    }
}


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crear_playlist('Heavy Metal');
reproductor.crear_playlist('Trash Metal');
reproductor.reproducir_playlist('Heavy Metal');