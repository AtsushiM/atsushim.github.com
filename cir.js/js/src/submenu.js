DOC.submenu = function(config) {
    'use strict';

    $(window).on(C.event.resize, subPoint);
    $(window).on(C.event.load, subPoint);

    function subPoint() {
        var winH = this.innerHeight,
            $sub = $('#sub'),
            subH = $sub[0].offsetHeight,
            subTop = $sub[0].offsetTop;

        if (subH + subTop > winH) {
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
