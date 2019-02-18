// Fade in page
$(function() {
    $('body').removeClass('fade-out');
});

// Open side nav
// function openNav() {
//     $('#mySidenav').css('transform', 'translateX(0)');
// }

// // Close side nav
// function closeNav() {
//     $('#mySidenav').css('transform', 'translateX(-250px)');
// }

// // Open/ close side nav on window resize
// function checkWidth() {
//     return ($(window).width() > 991) ? openNav() : closeNav();
// }
// $(window).resize(checkWidth);

// // Scrolling
// $('.about-me').click(function(e) {
//     if ($(window).width() < 992) {
//         $('html, body').animate({
//             scrollTop: $('#about').offset().top - 44
//         }, 900, 'easeInOutExpo')
//     } else {
//         $('html, body').animate({
//             scrollTop: $('#about').offset().top
//         }, 900, 'easeInOutExpo')
//     }
// });

// $('.projects').click(function(e) {
//     if ($(window).width() < 992) {
//         $('html, body').animate({
//             scrollTop: $('#projects').offset().top - 44
//         }, 900, 'easeInOutExpo')
//     } else {
//         $('html, body').animate({
//             scrollTop: $('#projects').offset().top
//         }, 900, 'easeInOutExpo')
//     }
// });

// $('.experience').click(function(e) {
//     if ($(window).width() < 992) {
//         $('html, body').animate({
//             scrollTop: $('#experience').offset().top - 44
//         }, 900, 'easeInOutExpo')
//     } else {
//         $('html, body').animate({
//             scrollTop: $('#experience').offset().top
//         }, 900, 'easeInOutExpo')
//     }
// });

// $('.contact').click(function(e) {
//     if ($(window).width() < 992) {
//         $('html, body').animate({
//             scrollTop: $('#contact').offset().top - 44
//         }, 900, 'easeInOutExpo')
//     } else {
//         $('html, body').animate({
//             scrollTop: $('#contact').offset().top
//         }, 900, 'easeInOutExpo')
//     }
// });

// // Collapse side nav when link on click
// $('.nav-link').click(function(e) {
//     if ($(window).width() < 992) return closeNav();
// });

// // Menu background change on scroll
// let targetOffset = $(".wrapper").offset().top;

// let $w = $(window).scroll(function(){
//     if ( $w.scrollTop() > targetOffset ) {   
//         $('.menu-wrapper').css({
//             'background': '#202528'
//         });
//     } else {
//         $('.menu-wrapper').css({
//             'background': 'transparent',
//             'color': 'white'
//         });
//     }
// });
