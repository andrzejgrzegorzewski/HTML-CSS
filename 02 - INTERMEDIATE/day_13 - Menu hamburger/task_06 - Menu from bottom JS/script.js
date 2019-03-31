// const arrow = document.querySelector('.arrow');
// const nav = document.querySelector('nav');
// const fas = document.querySelector('.fas');

// arrow.addEventListener('click', function () {
//     nav.classList.toggle("on");
//     fas.classList.toggle("on");
// });

// or

const arrow = document.querySelector(".arrow");
const all = document.querySelectorAll('.active');

arrow.addEventListener('click', function () {
    for (let i = 0; i < all.length; i++) {
        all[i].classList.toggle("on");
    }
});