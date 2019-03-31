$(".interface").on('click', function () {

    if ($(this).hasClass("orange")) {
        console.log('true orange');
        // $("body").toggleClass("orange");
        // or

        // $('body').css("background-color", "orange");
        // or

        // $('body').css({
        //     "font-size": "30px",
        //     "background-color": "orange"
        // });

        // $('p').css({
        //     "font-size": "130px"
        // });

        // or

        $('body').attr("class", "orange");
    }

    if ($(this).hasClass("green")) {
        console.log("true green");

        $('body').attr('class', "green");
    }

    // JS
    // if (this.classList.contains("green")) {
    //     console.log('true green');
    // }

    if ($(this).hasClass("increase")) {
        console.log("true plus");
        $('.text').animate({
            "font-size": "+=20px"
        }, 2000);
    }


    if ($(this).hasClass("move")) {
        console.log("true move");
        $('.text').animate({
            "legt": "+=20px",
            "letter-spacing": "+=10px"
        }, 2000);
    }
})