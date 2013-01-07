(function() {
    var $ = C.selector,
        storage = new C.LocalStorage(),
        clsOpen = 'open',
        key = clsOpen + '-';

    initOpen();

    // toggle
    $('#main').find('dt, h3').on(C.event.click, function() {
        var $parent = $(this).parent();

        if (!$parent.hasClass(clsOpen)) {
            return addOpen($parent);
        }

        return removeOpen($parent);
    });

    // local link
    $('a[href^="#"]').on(C.event.click, function() {
        addOpen($($(this).attr('href')));
    });

    // init open
    function initOpen() {
        var opendata = storage.get(),
            i,
            id;

        for (i in opendata) {
            id = i.split(key)[1];

            if (id) {
                addOpen($('#' + id));
            }
        }
    }

    function addOpen($el) {
        $el.addClass(clsOpen);
        storage.set(key + $el.attr('id'), 1);
    }
    function removeOpen($el) {
        $el.removeClass(clsOpen);
        storage.remove(key + $el.attr('id'));
    }
}());
