Global.MakeSrc = function(config) {
    'use strict';

    var Mine = Global.MakeSrc,
        e = config.e,
        observer = config.observer,
        ajax = config.ajax,
        instanse = {
            make: function(srcs) {
                var src = '',
                    i;

                for (i in srcs) {
                    src += srcs[i];
                }

                ajax.closurecompiler({
                    src: src,
                    callback: function(data) {
                        observer.fire(e.createjssrc, data);
                    }
                });

                return src;
            }
        };

    observer.on(e.srcloaded, instanse.make);

    return instanse;
};
