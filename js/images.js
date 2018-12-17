
$(document).ready(function(){



    $(".navButtons").mouseover(function(){
      $(this).css("color", "white")
      $(this).css("background", "#64403E");
    });
    $(".navButtons").mouseout(function(){
      $(this).css("color", "white");
      $(this).css("background", "#666439");

    });

    $("img").click(function(){
    	$(this).css("transform", "scale(1.5)");
    })






});