DOC.localLink = function(config) {
    'use strict';

    // local link
    return $('a[href^="#"]').on(C.event.click, function() {
        addOpen($($(this).attr('href')));
    });
};
