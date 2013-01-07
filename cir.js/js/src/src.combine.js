(function() {
var DOC = {},
    $ = C.selector,
    clsOpen = 'open',
    storage = new C.LocalStorage({
        namespace: clsOpen
    });

function addOpen($el) {
    $el.addClass(clsOpen);
    storage.set($el.attr('id'), 1);
}
function removeOpen($el) {
    $el.removeClass(clsOpen);
    storage.remove($el.attr('id'));
}
DOC.init = function(config) {
    'use strict';

    var opendata = storage.get(),
        i;

    for (i in opendata) {
        addOpen($('#' + i));
    }
};
DOC.localLink = function(config) {
    'use strict';

    // local link
    return $('a[href^="#"]').on(C.event.click, function() {
        addOpen($($(this).attr('href')));
    });
};
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
DOC.toggle = function(config) {
    'use strict';

    return $('#main').find('dt, h3').on(C.event.click, function() {
        var $parent = $(this).parent();

        if (!$parent.hasClass(clsOpen)) {
            return addOpen($parent);
        }

        return removeOpen($parent);
    });
};
DOC.init();
DOC.localLink();
DOC.submenu();
DOC.toggle();
}());