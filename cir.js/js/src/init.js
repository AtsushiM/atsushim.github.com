DOC.init = function(config) {
    'use strict';

    var opendata = storage.get(),
        i;

    for (i in opendata) {
        addOpen($('#' + i));
    }
};
