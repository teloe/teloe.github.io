jQuery(document).ready(function ($) {
    // Open/ close menu
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
        $('.close-overlay').toggleClass('active');
    });

    function closeMenu() {
        $('.menu-toggle').removeClass('active');
        $('nav').removeClass('open');
        $('.close-overlay').removeClass('active');
    }
    closeMenu();

    $('.close-overlay, nav a').on('click', closeMenu);

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            return closeMenu();
        }
    });

    $('main section:first-of-type').addClass('active');

    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        $('section' + id)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('header a[href="#home"]').on('click', function (e) {
        e.preventDefault();
        $('section#home').addClass('active').siblings().removeClass('active');
    });

    // $('#year').text(new Date().getFullYear());

    // function animateOnScroll() {
    // const windowBottom = $(this).scrollTop() + $(this).innerHeight();
    // $('.project').each(function () {
    // const objectMid = $(this).offset().top + $(this).innerHeight() / 2;

    // $(this).removeClass('visible');
    // if (objectMid < windowBottom) {
    // $(this).addClass('visible');
    // }
    // });
    // }
    // animateOnScroll();

    // $(window).on('scroll', animateOnScroll);
});
