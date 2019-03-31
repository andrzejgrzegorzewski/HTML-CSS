//JQ
//click in button and add class active and blur
// $('.article button').on('click', function () {
//     $('.modal-wrap').addClass("active");
//     $('.article').addClass("blur");
// });

// $('.hide').on('click', function () {
//     $('.modal-wrap').removeClass("active");
//     $('.article').removeClass("blur");
// });
//-------------------------------------------------------
// or
//short wersion

// $('.article button, .hide').on('click', function () {
//     $('.modal-wrap').toggleClass("active");
//     $('.article').toggleClass("blur");
// });


// =================================================
// JS

const btn = document.querySelector(".article button");
const hide = document.querySelector(".hide");

btn.addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.add("active");
    document.querySelector(".article").classList.add("blur");
});

hide.addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.remove("active");
    document.querySelector(".article").classList.remove("blur");
});