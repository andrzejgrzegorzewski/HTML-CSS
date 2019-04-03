$(window).on('scroll', function () {

    //window height
    const windowHeight = $(window).height();

    //info about where is the scroll
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    //first secton -------------------------------------------------

    //getting the item
    const $art2 = $('.art2');
    const $art3 = $('.art3');
    const $art4 = $('.art4');

    //height from top
    const art2FromTop = $art2.offset().top;
    // console.log(art2FromTop);
    const art3FromTop = $art3.offset().top;
    const art4FromTop = $art4.offset().top;
    // console.log(art4FromTop);

    //items height
    const art2Height = $art2.outerHeight();
    const art3Height = $art3.outerHeight();
    const art4Height = $art4.outerHeight();
    // console.log(art2Height);
    // console.log(art3Height);
    // console.log(art4Height);

    if (scrollValue > (art2FromTop + art2Height - windowHeight)) {
        $art2.addClass('active');
    }

    if (scrollValue > (art3FromTop + art3Height - windowHeight)) {
        $art3.addClass('active');
    }

    if (scrollValue > (art4FromTop + art4Height - windowHeight)) {
        $art4.addClass('active');
    }

    //second secton -------------------------------------------------

    const $op1 = $('.op1');
    const $op2 = $('.op2');

    const op1FromTop = $op1.offset().top
    const op2FromTop = $op2.offset().top

    const op1Height = $op1.outerHeight();
    const op2Height = $op2.outerHeight();

    if (scrollValue > (op1FromTop + op1Height / 4 - windowHeight)) {
        $op1.addClass('active');
    }

    if (scrollValue > (op2FromTop + op2Height / 4 - windowHeight)) {
        $op2.addClass('active');
    }

    //cleaner-----------------------------------------------------
    if (scrollValue < 100) {
        $('article').removeClass('active');
    }
});