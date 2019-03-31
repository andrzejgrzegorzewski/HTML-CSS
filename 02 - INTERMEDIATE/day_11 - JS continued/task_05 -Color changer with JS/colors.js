// var divOrange = document.querySelector('.orange');
// var divGreen = document.querySelector('.green');
// var divBlue = document.querySelector('.blue');
// var divYellow = document.querySelector('.yellow');
// var divRed = document.querySelector('.red');

// function changeBgcOrange() {
//     document.body.className = 'orange';
// }

// function changeColor() {
//     document.body.className = this.className;
// }

// divOrange.addEventListener('click', changeColor);
// divGreen.addEventListener('click', changeColor);
// divBlue.addEventListener('click', changeColor);
// divYellow.addEventListener('click', changeColor);
// divRed.addEventListener('click', changeColor);


// ----------------------------------------------------
// or
// ------------------------------------------------------

const items = document.querySelectorAll('div');

function changeColor() {
    document.body.className = this.className;
}

items.forEach(function (item) {
    item.addEventListener('click', changeColor);
})