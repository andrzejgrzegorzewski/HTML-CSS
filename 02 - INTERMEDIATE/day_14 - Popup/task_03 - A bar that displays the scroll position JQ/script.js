$(window).on('scroll', function () {
    $('div.info').text("The current scroll position is: " + $(window).scrollTop() + " px.");
    if ($(window).scrollTop() > 200) {
        $('div.info').addClass('active');
    } else {
        $('div.info').removeClass('active');
    }
});