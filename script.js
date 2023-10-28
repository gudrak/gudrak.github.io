document.addEventListener("DOMContentLoaded", function () {
  // Obtén elementos del DOM
  var videoPlayer = document.getElementById("m3u-player");
  var videoSource = document.getElementById("video-source");

  // Array de enlaces a videos en el archivo M3U
  var videoUrls = [
    "https://ia803106.us.archive.org/3/items/tbbt-t-1-e-2/TBBT-T1-E2.mp4",
    "https://ia600509.us.archive.org/22/items/tbbt-t1-e3/TBBT-T1-E3.mp4"
  ];

  // Función para cambiar el video actual
  function changeVideo(index) {
    videoSource.setAttribute("src", videoUrls[index]);
    videoPlayer.load(); // Recargar el reproductor de video
    videoPlayer.play(); // Iniciar la reproducción automáticamente
  }

  // Inicializar con el primer video
  changeVideo(0);

  // Escuchar eventos de cambio de video
  videoPlayer.onended = function () {
    // Cambia al siguiente video cuando el actual termine
    var currentIndex = videoUrls.indexOf(videoSource.getAttribute("src"));
    var nextIndex = (currentIndex + 1) % videoUrls.length;
    changeVideo(nextIndex);
  };
});
