new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 4.45,
    centeredSlides: true,
    loop:true,
    slidesPerGroup: 1,
    speed: 800,
    breakpoints: {
        1920: {
            slidesPerView: 4.45,
            slidesPerGroup:3,
        },
        1679:{
            slidesPerView: 4.45,
            slidesPerGroup:3,
        },
        1600:{
            slidesPerView: 4.45,
            slidesPerGroup:3,
            spaceBetween: 10,
        },
        1439: {
            slidesPerView: 3.65,
            slidesPerGroup:3,
        },
        1279: {
            slidesPerView: 4.25,
            slidesPerGroup:3,
        },
        1023: {
            slidesPerView: 4.25,
            slidesPerGroup:3,
        },
        834: {
            slidesPerView: 3.8,
            slidesPerGroup:3,
        },
        810: {
            slidesPerView: 3.8,
            slidesPerGroup:3,
        },
        768: {
            slidesPerView: 3.8,
            slidesPerGroup:3,
        },
        736: {
            slidesPerView: 3.8,
            slidesPerGroup:3,
        },
        413: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            pagination:false
        },
        375: {
            slidesPerView: 1.8,
            spaceBetween: 5,
            pagination:false
        },
        320: {
            slidesPerView: 1.65,
            spaceBetween: 30,
            pagination:false
        }
    }
});