Global.SrcArea = function(config) {
    'use strict';

    var Mine = Global.SrcArea,
        e = config.e,
        observer = config.observer,
        el = config.el,
        instanse = {
            setValue: function(src) {
                el.srcarea[0].value = src;
            },
            loading: function() {
                instanse.setValue('Now Create...');
            }
        };

    observer.on(e.createjssrc, instanse.setValue);
    observer.on(e.srccreatestart, instanse.loading);

    return instanse;
};
