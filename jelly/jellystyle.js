$(document).ready(function() {

    var audio2 = document.createElement('audio');
     audio2.setAttribute('src', 'jelly_audio/slurp4.mp3');
    
     $('#button2').click(function() {
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
    audio4.setAttribute('src', 'jelly_audio/slurp_mouth.mp3');
    
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

    var audio5 = document.createElement('audio');
    audio5.setAttribute('src', 'jelly_audio/smack_single.mp3');
    
    $('#button5').click(function() {
    	console.log("stared")
    	$("#button5").css("background", "#ffbbaf");

        audio5.play();
        audio5.addEventListener("ended", function(){
    	audio5.currentTime = 0;
    	console.log("ended");
    	$("#button5").css("background", "white");
		});
    });

    var audio6 = document.createElement('audio');
    audio6.setAttribute('src', 'jelly_audio/smack_mulitple.mp3');
    
    $('#button6').click(function() {
    	console.log("stared")
    	$("#button6").css("background", "#ffbbaf");

        audio6.play();
        audio6.addEventListener("ended", function(){
    	audio6.currentTime = 0;
    	console.log("ended");
    	$("#button6").css("background", "white");
		});
    });

    var audio7 = document.createElement('audio');
    audio7.setAttribute('src', 'jelly_audio/spoon_slap.mp3');
    
    $('#button7').click(function() {
    	console.log("stared")
    	$("#button7").css("background", "#ffbbaf");

        audio7.play();
        audio7.addEventListener("ended", function(){
    	audio7.currentTime = 0;
    	console.log("ended");
    	$("#button7").css("background", "white");
		});
    });

    var audio8 = document.createElement('audio');
    audio8.setAttribute('src', 'jelly_audio/drop.mp3');
    
    $('#button8').click(function() {
    	console.log("stared")
    	$("#button8").css("background", "#ffbbaf");

        audio8.play();
        audio8.addEventListener("ended", function(){
    	audio8.currentTime = 0;
    	console.log("ended");
    	$("#button8").css("background", "white");
		});
    });

    var audio9 = document.createElement('audio');
    audio9.setAttribute('src', 'jelly_audio/slide.mp3');
    
    $('#button9').click(function() {
    	console.log("stared")
    $("#button9").css("background", "#ffbbaf");

        audio9.play();
        audio9.addEventListener("ended", function(){
    	audio9.currentTime = 0;
    	console.log("ended");
    $("#button9").css("background", "white");
		});
    });

    var audio10 = document.createElement('audio');
    audio10.setAttribute('src', 'jelly_audio/shake1.mp3');
    
    $('#button10').click(function() {
    	console.log("stared")
    	$("#button10").css("background", "#ffbbaf");

        audio10.play();
        audio10.addEventListener("ended", function(){
    	audio10.currentTime = 0;
    	console.log("ended");
    	$("#button10").css("background", "white");
		});
    });
});