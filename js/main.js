$(function() {
    // dropdown
    $(document).on('click', '.dropdown>a', function (e) {
        e.preventDefault();
    });
    $(document).on('click', '.dropdown', function (e) {
        e.stopPropagation();
        $(".dropdown").not(this).removeClass("active");
        $(this).toggleClass("active");
    });
    $(document).click(function () {
        $(".dropdown").removeClass("active");
    });

    // message close
    $('.message-close').click(function (e) {
        e.preventDefault();
        $(".message").hide();
    });

    // nav
    $('.btn-nav').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(window).outerWidth() <= 768) {
            $('body').toggleClass('nav_on');
            $('body').removeClass('nav_off');
            if ($('body').hasClass('nav_on')) {
                $('.nav').animate({
                    'left': '0'
                }, 'fast')
            } else {
                $('.nav').animate({
                    'left': '-10rem'
                }, 'fast', function () {
                    $(this).removeAttr('style')
                })
            }
        } else {
            $('body').toggleClass('nav_off');
            $('body').removeClass('nav_on');
            if ($('body').hasClass('nav_off')) {
                $('.nav').animate({
                    'left': '-10rem'
                }, 'fast');
                $('.main').animate({
                    'margin-left': '0'
                }, 'fast')
            } else {
                $('.nav').animate({
                    'left': '0'
                }, 'fast', function () {
                    $(this).removeAttr('style')
                });
                $('.main').animate({
                    'margin-left': '10rem'
                }, 'fast', function () {
                    $(this).removeAttr('style')
                })
            }
        }
    });
});