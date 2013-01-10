(function() {
var DOC = {},
    $ = C.$,
    clsClose = 'close',
    clsOpen = 'open',
    storageClose = new C.LocalStorage({
        namespace: clsClose
    }),
    storageOpen = new C.LocalStorage({
        namespace: clsOpen
    });

function addClose($el) {
    if ($el[0]) {
        $el.addClass(clsClose);
        storageClose.set($el.attr('id'), 1);
    }
}
function removeClose($el) {
    if ($el[0]) {
        $el.removeClass(clsClose);
        storageClose.remove($el.attr('id'));
    }
}

function addOpen($el) {
    if ($el[0]) {
        $el.addClass(clsOpen);
        storageOpen.set($el.attr('id'), 1);
    }
}
function removeOpen($el) {
    if ($el[0]) {
        $el.removeClass(clsOpen);
        storageOpen.remove($el.attr('id'));
    }
}
DOC.init = function(config) {
    'use strict';

    var closedata = storageClose.get(),
        opendata = storageOpen.get(),
        hash = location.hash.split('#')[1],
        i;

    for (i in closedata) {
        addClose($('#' + i));
    }

    if (hash) {
        addOpen($('#' + hash));
    }
    for (i in opendata) {
        addOpen($('#' + i));
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

    var $main = $('#main');

    $main.find('dt').on(C.event.click, function() {
        var $parent = $(this).parent();

        if ($parent.hasClass(clsClose)) {
            return removeClose($parent);
        }

        return addClose($parent);
    });

    $main.find('h3').on(C.event.click, function() {
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
