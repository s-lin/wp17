$(document).ready(function() { 
	$('.button1').click(function(){
		$(this).addClass('animate');
	$('.button1').mouseover(function function_name(argument) {
		// body...
	})
	});

	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'jelly_audio/double_slurp.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('button2').click(function() {
        audioElement.play();
    });
});