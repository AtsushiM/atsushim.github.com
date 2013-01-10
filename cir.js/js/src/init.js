DOC.init = function(config) {
    'use strict';

    var closedata = storage.get(),
        hash = location.hash.split('#')[1],
        i;

    for (i in closedata) {
        close(i);
    }

    if (hash) {
        close(hash);
    }

    function close(key) {
        addClose($('#' + key));
    }
};
