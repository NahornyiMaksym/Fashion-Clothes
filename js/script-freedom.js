$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        center: true,
        responsive: {
            0: {
                items: 3
            },

            1000: {
                items: 3
            }
        }
    });


});