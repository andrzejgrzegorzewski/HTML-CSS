function changeText() {

    const scrollSize = $(window).scrollTop().toFixed();

    const section1Height = $('.section1').height().toFixed();
    const section2Height = $('.section2').height().toFixed();
    const section3Height = $('.section3').height().toFixed();
    const section4Height = $('.section4').height().toFixed();

    const distanceFromBeginningSection1 = $('.section1').offset().top;
    const distanceFromBeginningSection2 = $('.section2').offset().top;
    const distanceFromBeginningSection3 = $('.section3').offset().top;
    const distanceFromBeginningSection4 = $('.section4').offset().top;

    if (scrollSize < section1Height) {
        $('div.info').text("Section 1");
    } else if (scrollSize < section2Height + distanceFromBeginningSection2) {
        $('div.info').text("Section 2");
    } else if (scrollSize < section3Height + distanceFromBeginningSection3) {
        $('div.info').text("Section 3");
    } else {
        $('div.info').text("Section 4");
    }
}

$(document).on('scroll', changeText);