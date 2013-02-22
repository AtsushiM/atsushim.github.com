Global.BtnCreate = function(config) {
    'use strict';

    var Mine = Global.BtnCreate,
        e = config.e,
        observer = config.observer,
        ajax = config.ajax,
        el = config.el,
        instanse = {
            requestJS: function() {
                var i = 0,
                    count = 0,
                    len = el.srcs.length,
                    srcs = {},
                    callback = function() {
                        count--;
                        if (count === 0) {
                            observer.fire(e.srcloaded, srcs);
                        }
                    };

                observer.fire(e.srccreatestart, srcs);
                instanse.unbind();

                for (; i < len; i++) {
                    if (el.srcs[i].checked) {
                        count++;
                        ajax.jssrc({
                            src: el.srcs[i].value,
                            result: srcs,
                            callback: callback
                        });
                    }
                }
            },
            unbind: function() {
                el.btn_create.attr('value', 'request...');
                return el.btn_create.off(C.e.CLICK, instanse.requestJS);
            },
            bind: function() {
                el.btn_create.attr('value', 'Create.');
                return el.btn_create.on(C.e.CLICK, instanse.requestJS);
            }
        };

    instanse.bind();
    observer.on(e.createjssrc, function() {
        instanse.bind();
    });

    return instanse;
};
