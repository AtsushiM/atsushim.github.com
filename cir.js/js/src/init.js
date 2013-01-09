DOC.init = function(config) {
    'use strict';

    var opendata = storage.get(),
        hash = location.hash.split('#')[1],
        i;

    for (i in opendata) {
        open(i);
    }

    if (hash) {
        open(hash);
    }

    function open(key) {
        addOpen($('#' + key));
    }
};
