

var randomNumber;
var loss = 0;
var win = 0;
var previous = 0;

var startGame = function(){
    $(".crystals").empty();

randomNumber = Math.floor(Math.random() * 101) + 19;

$("#result").html('Random Result: ' + randomNumber)

for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) +1;

    
    
    var crystal = $("<div>");
        crystal.attr({
        "class":'crystal',
        "data-random": random
    });
    crystal.html(random);
    $(".crystals").append(crystal);

}
}
startGame();




$(document).on('click',".crystal", function() {

    var num = parseInt($(this).attr("data-random"));
    previous+=num;
   
  
    if( previous > randomNumber){
        loss--;
    $("#loss").html(loss);
    previous = 0;
    startGame();
    } else if (previous === randomNumber){
        win++;
    $("#win").html(win);
    previous = 0;
    startGame();

    
    }



})