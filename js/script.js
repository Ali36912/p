$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed:2500,
        draggable: false,
        waitForAnimate: true,
        centerMode: true,
        variableWidth: true,
        focusOnSelecct: true,
        initialSlide: 4,
        responsive: [
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    variableWidth: true,
                    speed: 1000,
                  }
            },
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    infinite: true,
                  }
            }
        ]
    });
})

$(document).ready(function(){
    $('.slider__reviews').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll:2,
        infinite: true,
        autoplay: false,
        autoplaySpeed:2500,
        draggable: false,
        waitForAnimate: false,
        centerMode:true,
        variableWidth: true,
    });
})