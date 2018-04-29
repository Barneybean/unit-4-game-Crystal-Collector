$(document).ready(function() {
var targetNumber="";
var redValue="";
var blueValue="";
var yellowValue="";
var greenValue="";
var score;
var win;
var loss;

function initialize() {
    targetNumber=Math.floor(Math.random()*101)+19;
    redValue=Math.floor(Math.random()*12)+1;
    blueValue=Math.floor(Math.random()*12)+1;
    yellowValue=Math.floor(Math.random()*12)+1;
    greenValue=Math.floor(Math.random()*12)+1;
    score=0;
    wins=0;
    loss=0;
    $("#targetNumber").html(targetNumber);
    $("#score").html(score);
    $("#wins").html(wins);
    $("#loss").html(loss);
}
initialize();

console.log(redValue +"<br>"+blueValue+"<br>"+yellowValue+"<br>"+greenValue);

    if () {
        
    }


});