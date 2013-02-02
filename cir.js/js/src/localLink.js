DOC.localLink = function(config) {
    'use strict';

    // local link
    return $('a[href^="#"]').on(C.e.CLICK, function(e) {
        removeClose($($(this).attr('href')));
    });
};
