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
