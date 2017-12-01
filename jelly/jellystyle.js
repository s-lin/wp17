$(document).ready(function() {

    var audio2 = document.createElement('audio');
    audio3.setAttribute('src', 'jelly_audio/single_slurp.mp3');
    
    $('#button3').click(function() {
    	console.log("stared")
    	//some fucking code here
    	$("#button2").css("background", "#ffbbaf");

        audio2.play();
        audio2.addEventListener("ended", function(){
    	audio2.currentTime = 0;
    	console.log("ended");
    	//some more shit here
    	$("#button2").css("background", "white");
		});
    });

   	var audio3 = document.createElement('audio');
    audio3.setAttribute('src', 'jelly_audio/double_slurp.mp3');
    
    $('#button3').click(function() {
    	console.log("stared")
    	$("#button3").css("background", "#ffbbaf");

        audio3.play();
        audio3.addEventListener("ended", function(){
    	audio3.currentTime = 0;
    	console.log("ended");
    	$("#button3").css("background", "white");
		});
    });

    var audio4 = document.createElement('audio');
    audio3.setAttribute('src', 'jelly_audio/slurp_mouth.mp3');
    
    $('#button4').click(function() {
    	console.log("stared")
    	$("#button4").css("background", "#ffbbaf");

        audio4.play();
        audio4.addEventListener("ended", function(){
    	audio4.currentTime = 0;
    	console.log("ended");
    	$("#button4").css("background", "white");
		});
    });
});