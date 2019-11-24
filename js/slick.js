/* front-page sliders */
$(document).ready(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        lazyLoad:'progressive'
    });
});

/* best selling products sliders */
$(document).ready(function () {
    $('.carousel-best-selling-products').slick({
        arrows:false,
        slidesToShow: 4,
        autoplay: true,
        lazyLoad:'progressive',
        variableWidth: true
    });
});