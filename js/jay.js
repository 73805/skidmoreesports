$(document).ready(function() {
    /*prevent 'flash of unstyled content'*/
    /*body has this class, and inline css "display:none"*/
    $(".no-fouc").css('display','block');
    /*HD button functionality (works with css)*/
    $(".hd-option").bind('click', function() {
        $('body').toggleClass('hd-img');
        $(this).find('.inner').toggleClass('hd-active');
    });

    /*Checkboxes reskin functionality*/
    /*skins are dynamically generated and require delegation from an element available on load (.search)*/
    $(".search").on('click', '.fancy-checkbox', function() {
        $(this).toggleClass('check-active');
    });

    /*mobile nav activation */
    $('.burger').bind('click', function() {
        $('nav .content-width').slideToggle();
        $('.burger').toggleClass('mustard');
    });

    /*SMOOTH SCROLL (SELF-LINKING)*/
    //from css-tricks, but modified to calculate nav height
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var navHeight = $('nav').height();
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: (target.offset().top - navHeight)
                    }, 1000);
                    return false;
                }
            }
        });
    });

    var kkeys = [],
        shmurgle = "38,38,40,40,37,39,37,39,66,65";
    $(document).keydown(function(e) {

        kkeys.push(e.keyCode);

        if (kkeys.toString().indexOf(shmurgle) >= 0) {

            $(document).unbind('keydown', arguments.callee);
            $("*").css({
                'color': 'rgb(0,255,0)',
                'font-family': 'monospace',
                'text-transform':'lowercase',
                'background-color': 'black',
                'background-image': 'none'
            });
            $(".rib").css('background-image', 'url("img/hack.jpg")');

        };
    });
});