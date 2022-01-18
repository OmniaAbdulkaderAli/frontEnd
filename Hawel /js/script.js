let manageBtn = document.querySelector(' #manage');
let controlBtn = document.querySelector('#control');
let analysticsBtn = document.querySelector('#analysis');
let setupBtn = document.querySelector(' #setup');
let manageBtn2 = document.querySelector('#manage2');
let controlBtn2 = document.querySelector('#control2');
let analysticsBtn2 = document.querySelector('#analysis2');
let setupBtn2 = document.querySelector('#setup2');



// let settingBtn = document.querySelector(' #setting');
// let helpBtn = document.querySelector(' #helpting');
// let submitBtn = document.querySelector(' #ssubmit');





if (controlBtn2) {
    controlBtn2.addEventListener('click', function () {
        location.href = "controlPanel.html"
    })
}
if (manageBtn2) {
    manageBtn2.addEventListener('click', function () {
        location.href = "manage.html"
    })
}
if (analysticsBtn2) {
    analysticsBtn2.addEventListener('click', function () {
        location.href ="analysis.html"
    })
}

if (analysticsBtn) {
    analysticsBtn.addEventListener('click', function () {
        location.href = "analysis.html"
    })
}
if (setupBtn2) {
    setupBtn2.addEventListener('click', function () {
        location.href = "products.html"
    })
}

if (controlBtn) {
    controlBtn.addEventListener('click', function () {
        location.href = "controlPanel.html"
    })
}

if (manageBtn) {
    manageBtn.addEventListener('click', function () {
        location.href = "manage.html"
    })
}

if (setupBtn) {
    setupBtn.addEventListener('click', function () {
        location.href = "products.html"
    })
}




















//JQUERY//






$(".fa-bars").click(function () {

    let test = $('.hide');


    let headerHeight = $('header').offset().top;
    console.log(headerHeight)
    let asideWidth = $('aside').outerWidth();
    let leftoffset = $('aside').offset().left

    console.log(asideWidth)
    if (leftoffset == 0) {
        $(".div1").removeClass('test')
        $(".div2").addClass("d-none")
        $('header img').show();

        $(".hideMe").show(1000)

        $('aside').animate({
            left: `-${asideWidth}px`
        }, 1000, function () {

        });
    } else {
        $(".div2").removeClass('d-none')
        $(".div1").addClass('test')
        $('header img').hide();
        $(".hideMe").hide(1000)
        $('aside').animate({

            left: 0
        }, 1000, function () {});
    }
})

$('.manageToggle').click(function () {
    $('.toggleMyMange').animate({
        height: 'toggle'
    })
})
$('.setToggle').click(function () {
    $('.toggleMySet').animate({
        height: 'toggle'
    })
})