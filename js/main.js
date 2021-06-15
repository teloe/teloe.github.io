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
        if (e.keyCode === 27) closeMenu();
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

    // Animate on Scroll
    AOS.init({
        duration: 400,
        offset: 200,
    });
    $(function () {
        AOS.init();
    });
    $(window).on('load', function () {
        AOS.refresh();
    });

    let scrollRef = 0;

    window.addEventListener('scroll', function () {
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
});
