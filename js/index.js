$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,  // Enables navigation arrows
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],  // Custom left and right arrows (using FontAwesome icons)
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: true,
    });
});
