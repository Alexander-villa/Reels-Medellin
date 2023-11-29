document.addEventListener("DOMContentLoaded", function() {
  var videos = document.querySelectorAll("video");

  videos.forEach(function(video) {
      video.addEventListener("play", function() {
          pauseOtherVideos(video);
      });

      video.addEventListener("click", function() {
          if (video.requestFullscreen) {
              video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
              video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
              video.webkitRequestFullscreen();
          }
      });
  });

  function pauseOtherVideos(currentVideo) {
      videos.forEach(function(video) {
          if (video !== currentVideo) {
              video.pause();
          }
      });
  }
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let options = {
    numberPerPage:2, //Cantidad de datos por pagina
    goBar:true, //Barra donde puedes digitar el numero de la pagina al que quiere ir
    pageCounter:true, //Contador de paginas, en cual estas, de cuantas paginas
};

let filterOptions = {
    el:'#searchBox' //Caja de texto para filtrar, puede ser una clase o un ID
};

paginate.init('.myTable',options,filterOptions);
