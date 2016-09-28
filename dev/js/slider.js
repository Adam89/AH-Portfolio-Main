$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '.controllers .prev',
        nextArrow: '.controllers .next',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
