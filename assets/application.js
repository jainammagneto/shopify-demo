// Put your application javascript here


$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

$(function () {

    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html,body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 45)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




$(window).scroll(function () {
    if ($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ {
        $('header').addClass('opaque');
    } else {
        $('header').removeClass('opaque');
    }
});