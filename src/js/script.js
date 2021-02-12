$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
            // {
            //     breakpoint: 768,
            //     settings: {
            //         dots: true,
            //         arrows: false
            //     }
            // },
            // {
            //     breakpoint: 576,
            //     settings: {
            //         dots:true,
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //     }
            // }
        ]

    });
});

