/* front-page sliders */
$(document).ready(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

/* best selling products sliders */
$(document).ready(function () {
    $('.carousel-best-selling-products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth:true
    });
});