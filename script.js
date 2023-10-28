document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('m3u-player');
    const videoSource = document.getElementById('video-source');
    
    // Array de enlaces a videos en el archivo M3U
    const videoUrls = [
        "https://master.dl.sourceforge.net/project/confurtv/TBBT/T1/TBBT-T1-E3.mp4?viasf=1"
        // Agrega aquí los demás enlaces de tu archivo index.m3u
    ];
    
    let currentIndex = 0;

    // Función para cambiar el video actual
    function changeVideo() {
        videoSource.src = videoUrls[currentIndex];
        player.load();
        player.play();
        currentIndex = (currentIndex + 1) % videoUrls.length;
    }

    // Inicializa con el primer video
    changeVideo();

    // Escucha el evento 'ended' para cambiar al siguiente video al finalizar
    player.addEventListener('ended', function() {
        changeVideo();
    });
});
