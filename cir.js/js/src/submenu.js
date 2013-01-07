DOC.submenu = function(config) {
    'use strict';

    var $sub = $('#sub'),
        $footer = $('#footer');

    $(window).on(C.event.resize, subPoint);
    $(window).on(C.event.load, subPoint);

    function subPoint() {
        var winH = this.innerHeight,
            $sub = $('#sub'),
            subH = $sub[0].offsetHeight,
            subTop = $sub[0].offsetTop,
            footerH = $footer[0].offsetHeight;

        if (subH + subTop + footerH > winH) {
            $sub.css({
                position: 'static'
            });
        }
        else {
            $sub.css({
                position: 'fixed'
            });
        }
    }
};
