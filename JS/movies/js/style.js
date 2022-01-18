
$('.fa-align-justify').click(function () {



    let outerWidth = $('nav').outerWidth();
    let leftoffset = $('header').offset().left

    if (leftoffset == 0) {

        $('header').animate({
            left: `-${outerWidth}px`
        }, 1000, function () {

        });
        $('ul li').animate({
            paddingTop: '500px'
        }, 1000)


    } else {

        $('header').animate({
            left: 0
        }, 500, function () {

            
            $('ul li a').animate({
                paddingTop: '+=500px'
            }, 100).fadeIn();
        }
        
        );
        $('ul li').animate({
            paddingTop: '25px'
        }, 1600)


    }


    $('.fa-align-justify').toggleClass('fa-times');

});
