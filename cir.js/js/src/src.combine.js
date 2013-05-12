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
// splitLoad
(function() {
    var load = [
            'XML',
            'View',
            'Validate',
            'Twitter',
            'Tweener',
            'Timer',
            'Throttle',
            'Task',
            'Surrogate',
            'SSTrans',
            'SSAnime',
            'Sound',
            'SessionStorage',
            'ServerMeta',
            'Scroll',
            'ScriptLoad',
            'Route',
            'Rollover',
            'PreRender',
            'PC',
            'Orientation',
            'Ollection',
            'Observer',
            'Movie',
            'Model',
            'Modal',
            'Mobile',
            'LocalStorage',
            'LimitText',
            'ImgLoad',
            'HashQuery',
            'Handle',
            'FPS',
            'FontImg',
            'Facebook',
            'ExternalInterface',
            'Event',
            'DragFlick',
            'DeviceShake',
            'DeviceOrientation',
            'DeviceMotion',
            'Deferred',
            'DateFactory',
            'DataStore',
            'Base',
            'Async',
            'Anvas',
            'AnimeFrame',
            'Ajax',
            'util',
            'ssease',
            'ease',
            'dom',
            'selector'
        ],
        i = load.length;

    for (; i--;) {
        loadClass(load[i]);
    }

    function loadClass(id) {
        var $selector = C.$('#' + id + ' .load');

        new C.Ajax({
            url: '/cir.js/classes/' + id + '.html',
            callback: function(ret) {
                /* setTimeout(function() { */
                    $selector
                        .removeClass('load')
                        .html(ret);
                /* }, 10000); */
            }
        });
    }
}());
DOC.localLink = function(config) {
    'use strict';

    var scroll = new C.Scroll();

    // local link
    return $('a[href^="#"]').on(C.e.CLICK, function(e) {
        var $this = $(this),
            $href = $($this.attr('href'));

        removeClose($href);
        scroll.smooth($href[0], function() {
            /* console.log('test'); */
            location.hash = $this.attr('href').split('#')[1];
        });
        C.util.eventPrevent(e);
    });
};
DOC.submenu = function(config) {
    'use strict';

    var $sub = $('#sub'),
        $footer = $('#footer');

    $(window)
        .on(C.e.RESIZE, subPoint)
        .on(C.e.LOAD, subPoint);

    function subPoint() {
        var winH = this.innerHeight,
            $sub = $('#sub'),
            subH = $sub[0].offsetHeight,
            subTop = $sub[0].offsetTop,
            position = 'fixed',
            method = 'on',
            throttle = new C.Throttle({
                waittime: 25,
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
DOC.toggle = function(config) {
    'use strict';

    var $main = $('#main');

    $main.delegate('cls', C.e.CLICK, function() {
        var $parent = $(this).parent();

        if ($parent.hasClass(clsClose)) {
            return removeClose($parent);
        }

        return addClose($parent);
    });

    $main.delegate('method', C.e.CLICK, function() {
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
