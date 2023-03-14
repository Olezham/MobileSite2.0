$(document).ready(function() {
    $('.menu-btn-open').click(function() {
        $('.menu').toggleClass('active');
        $('.menu').removeClass('deactive');
        $('.main-content').toggleClass('deactive');
    });
    $('.menu-btn-close').click(function() {
        $('.main-content').removeClass('deactive');
        $('.menu').toggleClass('deactive');
    });
    $('.foto1ic').click(function() {
        $('.foto1img').removeClass('deactivefoto');
        $('.main-nav').toggleClass('deactivefoto');
        $('.icons').toggleClass('deactivefoto');
    });

    $('.foto2ic').click(function() {
        $('.foto2img').removeClass('deactivefoto');
        $('.main-nav').toggleClass('deactivefoto');
        $('.icons').toggleClass('deactivefoto');
    });

    $('.foto3ic').click(function() {
        $('.foto3img').removeClass('deactivefoto');
        $('.main-nav').toggleClass('deactivefoto');
        $('.icons').toggleClass('deactivefoto');
    });

    $('.foto4ic').click(function() {
        $('.foto4img').removeClass('deactivefoto');
        $('.main-nav').toggleClass('deactivefoto');
        $('.icons').toggleClass('deactivefoto');
    });

    $('.foto5ic').click(function() {
        $('.foto5img').removeClass('deactivefoto');
        $('.main-nav').toggleClass('deactivefoto');
        $('.icons').toggleClass('deactivefoto');
    });

    $('.foto6ic').click(function() {
        $('.foto6img').removeClass('deactivefoto');
        $('.main-nav').toggleClass('deactivefoto');
        $('.icons').toggleClass('deactivefoto');
    });


    $('.closeimgbtn').click(function() {
        $('.foto1img').addClass('deactivefoto');
        $('.foto2img').addClass('deactivefoto');
        $('.foto3img').addClass('deactivefoto');
        $('.foto4img').addClass('deactivefoto');
        $('.foto5img').addClass('deactivefoto');
        $('.foto6img').addClass('deactivefoto');
        $('.icons').removeClass('deactivefoto');
        $('.main-nav').removeClass('deactivefoto');
        
    });



});
