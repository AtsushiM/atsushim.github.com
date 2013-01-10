DOC.localLink = function(config) {
    'use strict';

    // local link
    return $('a[href^="#"]').on(C.event.click, function(e) {
        removeClose($($(this).attr('href')));
    });
};
