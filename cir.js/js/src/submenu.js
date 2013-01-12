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
            position = 'fixed',
            method = 'on',
            throttle = new C.Throttle({
                waittime: 50,
                callback: bind
            });

        if (subH + subTop > winH) {
            position = 'static';
            method = 'off';
        }
        else {
            bind();
        }

        $sub.css({
            position: position
        });
        $(window)[method]('scroll', function() {
            throttle.request();
        });

        function bind() {
            var footerH = $footer[0].offsetHeight,
                bodyH = document.body.clientHeight,
                scrollY = window.scrollY,
                diffTop = bodyH - footerH - subH - subTop - scrollY;

            if (diffTop > 0) {
                diffTop = 0;
            }

            $sub.css({
                marginTop: diffTop
            });
        }
    }
};
