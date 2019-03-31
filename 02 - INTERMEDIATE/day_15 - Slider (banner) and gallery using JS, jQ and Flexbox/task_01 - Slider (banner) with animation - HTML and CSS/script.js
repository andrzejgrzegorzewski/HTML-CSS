//parameters

let activeElement = 0;
const timeChange = 4000;

//we collect 4 elements on which we work
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const nameHtml = document.querySelector('.member h1');
const professionHtml = document.querySelector('.member h2');

//we create arrays with swapped items 
const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Hanna Closs', 'Carlos Ghana', 'Jon Bush'];
const professions = ['JS Programmer', 'UX/UI Designer', 'Front-End Developer'];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length)
        activeElement = 0;

    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    nameHtml.textContent = names[activeElement];
    professionHtml.textContent = professions[activeElement];
}

setInterval(changeElement, timeChange);