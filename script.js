document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('m3u-player');
    const videoSource = document.getElementById('video-source');
    
    fetch('tuarchivo.m3u')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const videoUrl = lines.find(line => line.trim() !== '' && !line.startsWith('#'));
            if (videoUrl) {
                videoSource.src = videoUrl;
                player.load();
            }
        })
        .catch(error => console.error('Error loading M3U file:', error));
});
