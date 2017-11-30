$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'jelly_audio/double_slurp.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#button2').click(function() {
        audioElement.play();
    });
    
    $('#pause').click(function() {
        audioElement.pause();
    });
});