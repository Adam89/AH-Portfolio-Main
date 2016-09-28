$(document).ready(function() {
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

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
