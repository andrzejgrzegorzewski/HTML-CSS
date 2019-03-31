// JS
// const burger = document.querySelector('.burger');

// const iconBurger = document.querySelector('.fa-bars');
// const iconX = document.querySelector('.fa-times');
// const column = document.querySelector('aside');
// const wrapper = document.querySelector('.wrapper');

// burger.addEventListener('click', function () {
//     iconBurger.classList.toggle("show");
//     iconX.classList.toggle("show");
//     column.classList.toggle("show");
//     wrapper.classList.toggle("show");
// });

// or

// JS

const burger = document.querySelector('.burger');
const activeElements = document.querySelectorAll('.active');

burger.addEventListener("click", function () {
    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.toggle("show")
    }
});

// ----------------------------------------------------

// JQ
// $('.burger').on("click", function () {
//     $('.fas, aside, .wrapper').toggleClass("show");
// });