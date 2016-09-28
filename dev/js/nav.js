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


/* Open when someone clicks on the span element */
$(document).ready(function() {
$('.open-overlay').click(function() {
document.getElementById("myNav").style.width = "100%";
});
});


 /* Close when someone clicks on the "x" symbol inside the overlay */
 $(document).ready(function() {
 $('.closebtn').click(function() {
document.getElementById("myNav").style.width = "0%";
});
 });
