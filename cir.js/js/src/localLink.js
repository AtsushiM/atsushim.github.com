DOC.localLink = function(config) {
    'use strict';

    // local link
    return $('a[href^="#"]').on(C.event.click, function(e) {
        addOpen($($(this).attr('href')));
    });
};
