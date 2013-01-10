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
