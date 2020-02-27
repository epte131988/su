$('.menu-block-1').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-block-1_active');
});

var mySwiper = new Swiper('.swiper-container', {
slidesPerView: 1,
breakpoints: {
    // when window width is >= 320px
    970: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1270: {
        slidesPerView: 4
    },
    639: {
        slidesPerView: 2
    }
},
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
      },
});
 