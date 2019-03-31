const txt = document.querySelector('div.info');

function changeText() {

    const scrollSize = window.scrollY;

    const section1Height = document.querySelector('.section1').clientHeight;
    const section2Height = document.querySelector('.section2').clientHeight;
    const section3Height = document.querySelector('.section3').clientHeight;
    const section4Height = document.querySelector('.section4').clientHeight;

    const distanceFromBeginningSection1 = document.querySelector('.section1').offsetTop;
    const distanceFromBeginningSection2 = document.querySelector('.section2').offsetTop;
    const distanceFromBeginningSection3 = document.querySelector('.section3').offsetTop;
    const distanceFromBeginningSection4 = document.querySelector('.section4').offsetTop;
    console.log(distanceFromBeginningSection2);
    console.log(section2Height);

    if (scrollSize < section1Height) {
        txt.textContent = "Section 1";
    } else if (scrollSize < section2Height + distanceFromBeginningSection2) {
        txt.textContent = "Section 2";
    } else if (scrollSize < section3Height + distanceFromBeginningSection3) {
        txt.textContent = "Section 3";
    } else {
        txt.textContent = "Section 4";
    }
}

window.addEventListener('scroll', changeText);