document.getElementById("buttonThing").onclick = function() {
var audio = new Audio("/moo.wav");
audio.play();


  fetch('https://official-joke-api.appspot.com/random_joke', {
  }).then(response => {
    console.log("response");
    return response.json();
  }).then(data => {
    console.log(data);
    let results = "";
    results += "<div id=\"setup\"><p>" + data.setup + "  (Hover below for something not funny)</p></div>";
    results += "<div id=\"punch\"><p>"  + data.punchline + "</p></div>";
    document.getElementById("catfact").innerHTML = results;
  }).catch(err => {
    console.log(err);
  });
}









//yeah!
document.getElementById("moreFun").onclick = function(){
var audio = new Audio("hey.mp3")
audio.play();
document.getElementById("intro").src = "hey.gif";
var bodyElement = document.querySelector("body");
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
var delay = 0;
function changeColor() {
    delay++;
    if (delay > 3) {
        bodyElement.style.backgroundColor = getRandomColor();
        delay = 0;
    }
    requestAnimationFrame(changeColor);
}
changeColor();
function getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }

    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }

    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }

    // creating the hex value by concatenatening the string values
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}

}
