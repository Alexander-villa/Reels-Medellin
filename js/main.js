function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let options = {
    numberPerPage:10, //Cantidad de datos por pagina
    goBar:true, //Barra donde puedes digitar el numero de la pagina al que quiere ir
    pageCounter:true, //Contador de paginas, en cual estas, de cuantas paginas
};

let filterOptions = {
    el:'#searchBox' //Caja de texto para filtrar, puede ser una clase o un ID
};

paginate.init('.myTable',options,filterOptions);


    // Obtener todos los elementos de video
    const videos = document.querySelectorAll('.video-item');

    // Agregar un controlador de eventos a cada video
    videos.forEach(video => {
      video.addEventListener('play', function() {
        // Pausar todos los demás videos cuando se reproduce uno
        videos.forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });

        // Entrar en modo de pantalla completa al reproducir
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
      });
    });

    