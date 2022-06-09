var passEmail = null;
var amount = null;
var chimpEmail = null;
var socialUrl = null;

$('input.pass-email').keyup(function () {
    // $chimpEmail = ($(this).val());
    chimpEmail = this.value;
    console.log("chimpEmail =" + chimpEmail);
    updateChimpEmailValue(chimpEmail);
});

function updateChimpEmailValue(chimpEmail){
    console.log("chimpupdate func");
    $target = $('input#mce-EMAIL');
    console.log($target);
    $('#mce-EMAIL').val(chimpEmail);
}

//trigger subscribe modal if return hit on email input
$("form.chimpy").submit(function(e){
    $('#subscribeModal').modal('show');
    return false;
});



function shareOnFB(socialUrl){

    var url = "https://www.facebook.com/sharer/sharer.php?u="+socialUrl+"&t=your message";
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
}


function shareOntwitter(socialUrl){
    var url = 'https://twitter.com/intent/tweet?url=URL_HERE&via=getboldify&text=yourtext';
    TwitterWindow = window.open(url, 'TwitterWindow',width=600,height=300);
    return false;
}


function shareOnLinkedIn(){
    var url = "https://plus.google.com/share?url=https://yoururl.com";
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480');
    return false;
}



//shrink nav
// $(window).on("scroll", function(){
//     if ($(this).scrollTop() >= 100){
//         $(".navbar").addClass("shrink");
//     }
//     if ($(this).scrollTop() <= 99){
//         $(".navbar").removeClass("shrink");
//     }
//
// });

(function ($) {
    'use strict';

    // Preloader js
    $(window).on('load', function () {
        $('.preloader').fadeOut(75);
    });

    //  Search Form Open
    $('#searchOpen').on('click', function () {
        $('.search-form').addClass('open');
    });
    $('#searchClose').on('click', function () {
        $('.search-form').removeClass('open');
    });

    //Hero Slider
    $('.hero-slider').slick({
        autoplay: false,
        infinite: false,
        // speed: 3000,
        arrows: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
        customPaging: function (slider, i) {
            var icon = $(slider.$slides[i]).data('icon');
            var text = $(slider.$slides[i]).data('text');
            return '<a><span>' + text + '</span></a>';
            // return '<a><i class="' + icon + '"></i><span>' + text + '</span></a>';
        },
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }]
    });
    $('.hero-slider').slickAnimation();

    // hero slider without pagination
    $('.hero-slider-2').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: false
    });
    $('.hero-slider-2').slickAnimation();

    // slick slider
    $('.work-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // about slider
    $('.about-slider').slick({
        arrows: true,
        autoplay: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
    });
    // about post slider
    $('.post-slider').slick({
        arrows: true,
        autoplay: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
    });

    // Accordions
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
    });

    // testimonial slider
    $('.testimonial-slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
    });

    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    function extendMagnificIframe(){

        var $start = 0;
        var $iframe = {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>' +
                '</div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtu',
                    id: function(url) {

                        var m = url.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
                        if ( !m || !m[1] ) return null;

                        if(url.indexOf('t=') != - 1){

                            var $split = url.split('t=');
                            var hms = $split[1].replace('h',':').replace('m',':').replace('s','');
                            var a = hms.split(':');

                            if (a.length == 1){

                                $start = a[0];

                            } else if (a.length == 2){

                                $start = (+a[0]) * 60 + (+a[1]);

                            } else if (a.length == 3){

                                $start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

                            }
                        }

                        var suffix = '?autoplay=1';

                        if( $start > 0 ){

                            suffix = '?start=' + $start + '&autoplay=1';
                        }

                        return m[1] + suffix;
                    },
                    src: '//www.youtube.com/embed/%id%'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function(url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        };

        return $iframe;

    }


    //   magnific popup video
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-zoom-in',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });

    $('.poptube').magnificPopup({
        type: 'iframe',
        iframe: extendMagnificIframe()
    });

    // Magnific Popup Image
    $('.popup-image').magnificPopup({
        type: 'image',
        removalDelay: 160, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: true,
        fixedBgPos: true
    });

    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }

    //Active changer
    $('.control').on('click', function () {
        $('.control').removeClass('active');
        $(this).addClass('active');
    });

    // animation scroll js
    var html_body = $('html, body');
    $('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500, 'easeInOutExpo');
                return false;
            }
        }
    });

    // easeInOutExpo Declaration
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t === 0) {
                return b;
            }
            if (t === d) {
                return b + c;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

    // back to top button
    $('.back-to-top').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });

    // -----------------------------
    //  Count Up
    // -----------------------------
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    // -----------------------------
    //  On Scroll
    // -----------------------------
    $(window).on('scroll', function () {
        counter();
    });

    // syotimer
    $('#simple-timer').syotimer({
        year: 2019,
        month: 1,
        day: 31,
        hour: 0,
        minute: 0
    });

    // AOS
    AOS.init();

    // $(window).scroll(function() {
    //     if ($(document).scrollTop() > 50) {
    //         $('nav').addClass('shrink');
    //     } else {
    //         $('nav').removeClass('shrink');
    //     }
    // });



})(jQuery);




