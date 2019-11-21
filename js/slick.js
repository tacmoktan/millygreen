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
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});