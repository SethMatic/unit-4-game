

var randomNumber;
var loss = 0;
var win = 0;
var previous = 0;

var startGame = function(){
    $(".crystals").empty();

var images = ['assests/images/button1.png',
'assests/images/button2.png',
'assests/images/button3.png',
'assests/images/button4.png'
];

randomNumber = Math.floor(Math.random() * 101) + 19;

$("#result").html('Match this score to win: ' + randomNumber)

for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) +1;

    
    
    var crystal = $("<div>");
        crystal.attr({
        "class":'crystal',
        "data-random": random
        
    });
    crystal.css({
        "background-image":"url('" + images[i]+ "')",
        "background-size":"cover"
    })

    // crystal.html(random);
    $(".crystals").append(crystal);

}
}

$("#previous").html(previous);
startGame();




$(document).on('click',".crystal", function() {

    var num = parseInt($(this).attr("data-random"));
    previous+=num;
    
    $("#previous").html(previous);
   
  
    if( previous > randomNumber){
        loss++;
    $("#loss").html(loss);
    
    previous = 0;
    $("#previous").html(previous);
    startGame();
    } else if (previous === randomNumber){
        win++;
    $("#win").html(win);
  
    previous = 0;
    $("#previous").html(previous);
    startGame();

    
    }



})