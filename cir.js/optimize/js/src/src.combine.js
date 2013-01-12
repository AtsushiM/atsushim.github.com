(function() {
var Global = {},
    $ = C.$;
Global.Ajax = function(config) {
    'use strict';

    var Mine = Global.Ajax,
        instanse = {
            jssrc: function(vars) {
                var ajax = new C.Ajax();

                ajax.request({
                    url: vars.src + '?update=' + Date.now(),
                    callback: function(data) {
                        vars.result[vars.src] = encodeURIComponent(data);
                        vars.callback();
                    }
                });
            },
            closurecompiler: function(vars) {
                var ajax = new C.Ajax(),
                    url = 'http://closure-compiler.appspot.com/compile',
                    level = 'compilation_level=SIMPLE_OPTIMIZATIONS',
                    format = 'output_format=text',
                    info = 'output_info=compiled_code',
                    query = '';

                query = level + '&' + format + '&' + info + '&' +
                    '&js_code=' + vars.src;

                ajax.request({
                    url: url,
                    type: 'POST',
                    query: query,
                    callback: function(data) {
                        vars.callback(data);
                    }
                });
            }
        };

    return instanse;
};
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
                return el.btn_create.off(C.event.click, instanse.requestJS);
            },
            bind: function() {
                el.btn_create.attr('value', 'Create.');
                return el.btn_create.on(C.event.click, instanse.requestJS);
            }
        };

    instanse.bind();
    observer.on(e.createjssrc, instanse.bind);

    return instanse;
};
Global.ChkAll = function(config) {
    'use strict';

    var Mine = Global.ChkAll,
        e = config.e,
        el = config.el,
        instanse = {
            toggle: function() {
                var i = 0,
                    len = el.srcs.length,
                    value = 'checked';

                if (!el.check_all[0].checked) {
                    value = '';
                }

                for (; i < len; i++) {
                    if (!el.srcs[i].disabled) {
                        el.srcs[i].checked = value;
                    }
                }
            }
        };

    el.check_all.on(C.event.click, instanse.toggle);

    return instanse;
};
Global.ChkSrc = function(config) {
    'use strict';

    var Mine = Global.ChkSrc,
        e = config.e,
        el = config.el,
        dependency = config.dependency,
        target,
        instanse = {
            checkDependency: function() {
                var $parent = $(this).parent().parent(),
                    key = 'passive';

                if (this.checked) {
                    key = 'active';
                }

                target = dependency[key][$parent[0].id];

                if (target) {
                    instanse.setDependency(target, this.checked);
                }
            },
            setDependency: function(ary, bool) {
                var i = 0,
                    len = ary.length;

                for (; i < len; i++) {
                    $('#' + ary[i] + ' input')[0].checked = bool;
                }
            }
        };

    el.srcs.on(e.change, instanse.checkDependency);

    return instanse;
};
Global.Event = C.klass({
    extend: C.Event,
    properties: {
        createjssrc: 'a',
        srccreatestart: 'b',
        srcloaded: 'c'
    }
});
Global.Element = function(config) {
    'use strict';

    var Mine = Global.Element,
        instanse = {
            check_all: $('#all'),
            btn_create: $('#create'),
            srcs: $('#srcfile input'),
            srcarea: $('#srcarea')
        };

    return instanse;
};
Global.Dependency = function(config) {
    'use strict';

    var Mine = Global.Dependency,
        instanse = {
            active: {
                selector_methods: [
                    'selector'
                ],
                selector_methods_animate: [
                    'selector',
                    'selector_methods',
                    'Tweener'
                ],
                ExternalInterface: [
                    'HashController',
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ]
            },
            passive: {
                selector: [
                    'selector_methods',
                    'selector_methods_animate'
                ],
                selector_methods: [
                    'selector_methods_animate'
                ],
                HashController: [
                    'ExternalInterface',
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                ExternalInterface: [
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                Tweener: [
                    'selector_methods_animate'
                ]
            }
        };

    return instanse;
};
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
                        src += srcs[key];
                    }
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
(function() {
    var arg = {
            observer: new C.Observer(),
            e: new Global.Event(),
            el: new Global.Element(),
            dependency: new Global.Dependency(),
            ajax: new Global.Ajax()
        };

    arg.makeSrc = new Global.MakeSrc(arg);
    arg.btnCreate = new Global.BtnCreate(arg);
    arg.chkAll = new Global.ChkAll(arg);
    arg.chkSrc = new Global.ChkSrc(arg);
    arg.srcArea = new Global.SrcArea(arg);

    return arg;
}());
}());
