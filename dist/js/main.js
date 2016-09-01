




// $(document).ready(function() {
//     var stickyNavTop = $('.nav').offset().top;

//     var stickyNav = function() {
//         var scrollTop = $(window).scrollTop();

//         if (scrollTop > stickyNavTop) {
//             $('.nav').addClass('sticky');
//         } else {
//             $('.nav').removeClass('sticky');
//         }
//     };
//     stickyNav();
//     $(window).scroll(function() {
//         stickyNav();
//     });
// });


// $(document).ready(function() {
//     $('.header1').click(function() {
//         var hotItem = document.getElementsByClassName('hot1');
//         for (var i = 0; i < hotItem.length; i++) {
//             hotItem[i].className = 'cool';
//         }
//     });
// });




$(document).ready(function() {
    $('#nav-icon2').click(function() {
        $(".menu").toggleClass('menu--open');
    });
});








$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 2,
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
