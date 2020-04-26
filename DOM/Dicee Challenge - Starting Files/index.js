// alert("working");
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceNumber = "images/dice"+ randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceNumber);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceNumber2 = "images/dice"+ randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceNumber2);

if(randomNumber1 > randomNumber2){
    var header = document.querySelector("h1");
    header.textContent = "Player 1 wins ";
}
else if(randomNumber2 > randomNumber1){
    var header = document.querySelector("h1");
    header.textContent = "Player 2 wins ";  
}
else
{
    var header = document.querySelector("h1");
    header.textContent = "Draw";
}