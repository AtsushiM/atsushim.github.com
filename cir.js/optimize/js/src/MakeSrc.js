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
                    key,
                    optimizedname = '/* optimize: ',
                    target;

                for (; i < len; i++) {
                    key = '/cir.js/optimize/' + el.srcs[i].value;

                    if (srcs[key]) {
                        target = $(el.srcs[i]).parent().find('.name');

                        if (target.length) {
                            optimizedname += target.html() + ' ';
                        }
                        /* optimizedname += ''; */
                        src += encodeURIComponent(srcs[key]);
                    }
                }

                optimizedname += '*/\n';

                ajax.closurecompiler({
                    src: src,
                    callback: function(data) {
                        observer.fire(e.createjssrc,
                            srcs['/cir.js/optimize/src/clouser_start.js'] +
                            optimizedname +
                            data +
                            srcs['/cir.js/optimize/src/clouser_end.js']);
                    }
                });

                return src;
            }
        };

    observer.on(e.srcloaded, function(srcs) {
        instanse.make(srcs);
    });

    return instanse;
};
