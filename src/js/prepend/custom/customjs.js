var passEmail = null;
var amount = null;
var chimpEmail = null;

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

$('.poptube').magnificPopup({
    type: 'iframe',
    iframe: extendMagnificIframe()
});


