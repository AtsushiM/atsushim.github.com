(function() {
    var $ = C.selector,
        clsOpen = 'open',
        storage = new C.LocalStorage({
            namespace: clsOpen
        });

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
            i;

        for (i in opendata) {
            addOpen($('#' + id));
        }
    }

    function addOpen($el) {
        $el.addClass(clsOpen);
        storage.set($el.attr('id'), 1);
    }
    function removeOpen($el) {
        $el.removeClass(clsOpen);
        storage.remove($el.attr('id'));
    }
}());
