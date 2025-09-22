$(document).ready(function () {
    $('.work_category .contents_article_sm').click(function() {
        $(this).addClass('activated');
        $('.work_category .contents_article_sm').not(this).removeClass('activated');
    });

    var owl = $('.service_contents');
    owl.owlCarousel({
        items: 1,
        margin: 20, 
       
        loop: true,
        autoplay: true,
        autoplayTimeout: 2600,
        smartSpeed: 600,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {1440: {items: 1}}
    })

});

$(document).ready(function () {

    var owl = $('.work_right');
    owl.owlCarousel({
        items: 1,
        margin: 20, 
        animateOut: 'fadein',
        animateOut: 'fadeOut',
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        smartSpeed: 600,
        nav: false,
        dots: false,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {1440: {items: 1}}
    })

});