

var randomNumber;
var loss;
var win;


randomNumber = Math.floor(Math.random() * 101) + 19;


$("#result").html('Random Result: ' + randomNumber)


for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) +1;
    
    var crystal = $("<div>");
    crystal.attr({
        "class":'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);

}

$(".crystal").on('click', function() {

    var num = parseInt($(this).attr("data-random"));
    var result = num + 5;
    console.log(result);



})