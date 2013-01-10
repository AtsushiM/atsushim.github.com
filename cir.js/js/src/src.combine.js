(function() {
var DOC = {},
    $ = C.$,
    clsClose = 'close',
    storage = new C.LocalStorage({
        namespace: clsClose
    });

function addClose($el) {
    if ($el[0]) {
        $el.addClass(clsClose);
        storage.set($el.attr('id'), 1);
    }
}
function removeClose($el) {
    if ($el[0]) {
        $el.removeClass(clsClose);
        storage.remove($el.attr('id'));
    }
}
DOC.init = function(config) {
    'use strict';

    var closedata = storage.get(),
        hash = location.hash.split('#')[1],
        i;

    for (i in closedata) {
        close(i);
    }

    if (hash) {
        close(hash);
    }

    function close(key) {
        addClose($('#' + key));
    }
};
DOC.localLink = function(config) {
    'use strict';

    // local link
    return $('a[href^="#"]').on(C.event.click, function(e) {
        removeClose($($(this).attr('href')));
    });
};
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
            footerH = $footer[0].offsetHeight / 2;

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
DOC.toggle = function(config) {
    'use strict';

    return $('#main').find('dt, h3').on(C.event.click, function() {
        var $parent = $(this).parent();

        if ($parent.hasClass(clsClose)) {
            return removeClose($parent);
        }

        return addClose($parent);
    });
};
DOC.init();
DOC.localLink();
DOC.submenu();
DOC.toggle();
}());
