const $doc = $(document);
const $header = $("header");
const $main = $("main");


$doc.on('scroll', function () {
    // console.log('dziala');

    //actual scroll value
    const scrollPos = $doc.scrollTop();
    // console.log(scrollPos);

    //distans from top
    const sectionOffest = $main.offset().top;
    // console.log(sectionOffest);

    //section height
    const headerHeight = $header.outerHeight();
    // console.log(headerHeight)


    //for one element
    // $header.css("opacity", 1 - scrollPos / headerHeight);
    // console.log(1 - scrollPos / headerHeight);

    //for more then one element
    $header.css({
        "opacity": 1 - scrollPos / headerHeight,
        "filter": 'grayscale(' + 2 * scrollPos / headerHeight + ')'

    });
});