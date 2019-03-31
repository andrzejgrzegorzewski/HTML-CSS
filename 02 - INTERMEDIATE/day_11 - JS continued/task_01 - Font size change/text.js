// items download from DOM
var increaseButton = document.querySelector('.bigger');
var decreaseButton = document.querySelector('.smaller');
var text = document.querySelector('p');

//data
let textSize = 24;
text.style.fontSize = textSize + "px";

//action

function textIncrease() {
    textSize += 2;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize -= 2;
    text.style.fontSize = textSize + "px";
}

//listening setting
increaseButton.addEventListener('click', textIncrease);
decreaseButton.addEventListener('click', textDecrease);