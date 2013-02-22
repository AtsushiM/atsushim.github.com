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
                    optimizedname = '/* optimize: ';

                for (; i < len; i++) {
                    key = el.srcs[i].value;

                    if (srcs[key]) {
                        if ($(el.srcs[i]).parent()[0].querySelector('.name')) {
                            optimizedname += $(el.srcs[i]).parent()[0].querySelector('.name').innerHTML + ' ';
                        }
                        optimizedname += '';
                        src += encodeURIComponent(srcs[key]);
                    }
                }

                optimizedname += '*/\n';

                ajax.closurecompiler({
                    src: src,
                    callback: function(data) {
                        observer.fire(e.createjssrc,
                            srcs['src/clouser_start.js'] +
                            optimizedname +
                            data +
                            srcs['src/clouser_end.js']);
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
