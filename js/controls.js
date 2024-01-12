    // Función que verifica el ancho de la pantalla y agrega el atributo "controls" a los videos
    function addControlsToVideos() {
        var videos = document.querySelectorAll('video');

        videos.forEach(function(video) {
            if (window.innerWidth <= 350) {
                video.setAttribute('controls', true);
            } else {
                video.removeAttribute('controls');
            }
        });
    }

    // Ejecuta la función al cargar la página y al redimensionar la ventana
    window.addEventListener('load', addControlsToVideos);
    window.addEventListener('resize', addControlsToVideos);