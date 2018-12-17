$(document).ready(function(){
	$(".navButtons").mouseover(function(){
      $(this).css("color", "white")
      $(this).css("background", "#64403E");
    });
    $(".navButtons").mouseout(function(){
      $(this).css("color", "white");
      $(this).css("background", "#666439");

    });

    $(".fbLogo").mouseover(function(){
      $(".iccFB").css("display", "inline-block");
      $(".iccFB").css("opacity", 0.75)
    });
    $(".fbLogo").mouseout(function(){
      $(".iccFB").css("display", "none");
    });
// API would be better here: in which an updated snapshot of the website would appear. iFrames was also not working for the big social media sites.//
	
	$(".igLogo").mouseover(function(){
      $(".iccInsta").css("display", "inline-block");
      $(".iccInsta").css("opacity", 0.75)
    });
    $(".igLogo").mouseout(function(){
      $(".iccInsta").css("display", "none");
    });

   	$(".twtrLogo").mouseover(function(){
      $(".iccTwit").css("display", "inline-block");
      $(".iccTwit").css("opacity", 0.75)
    });
    $(".twtrLogo").mouseout(function(){
      $(".iccTwit").css("display", "none");
    });



});