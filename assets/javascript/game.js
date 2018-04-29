$(document).ready(function() {
var targetNumber="";
var redValue="";
var blueValue="";
var yellowValue="";
var greenValue="";
var score;
var wins=0;
var loss=0;

function initialize() {
    // assign random number to each crystal
    targetNumber=Math.floor(Math.random()*101)+19;
    redValue=Math.floor(Math.random()*12)+1;
    blueValue=Math.floor(Math.random()*12)+1;
    yellowValue=Math.floor(Math.random()*12)+1;
    greenValue=Math.floor(Math.random()*12)+1;
    // reset counter
    score=0;
    // to assign value to each crystal
    var redBtn=$(".red").attr("data-chicken",redValue);
    var blueBtn= $(".blue").attr("data-chicken",blueValue);
    var yellowBtn=$(".yellow").attr("data-chicken",yellowValue);
    var greenBtn=$(".green").attr("data-chicken",greenValue);
    // to print out target number and score on screen
    $("#targetNumber").html(targetNumber);
    $("#wins").html(wins);
    $("#loss").html(loss);
    $("#score").html(score);
}
initialize();

// console.log(redValue +"<br>"+blueValue+"<br>"+yellowValue+"<br>"+greenValue);

$(".crystal").on("click", function(){
    score += parseInt($(this).attr("data-chicken"));
    $("#score").html(score);
    if(score == targetNumber) {
        wins++;
        initialize();
    }
    else if (score > targetNumber) {
        loss++;
        initialize();
    }
});
});