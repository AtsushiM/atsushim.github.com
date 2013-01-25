Global.MakeSrc = function(config) {
    'use strict';

    var Mine = Global.MakeSrc,
        e = config.e,
        observer = config.observer,
        ajax = config.ajax,
        el = config.el,
        instanse = {
            make: function(srcs) {
                var src = '',
                    i = 0,
                    len = el.srcs.length,
                    key;

                for (; i < len; i++) {
                    key = el.srcs[i].value;
                    if (srcs[key]) {
                        src += encodeURIComponent(srcs[key]);
                    }
                }

                ajax.closurecompiler({
                    src: src,
                    callback: function(data) {
                        observer.fire(e.createjssrc,
                            srcs['src/clouser_start.js'] + data + srcs['src/clouser_end.js']);
                    }
                });

                return src;
            }
        };

    observer.on(e.srcloaded, instanse.make);

    return instanse;
};
