$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.mainSlide').slick({
        fade: true,
        dots: true,
        autoplay: true,
        arrows: false,
    }
    );

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });
});