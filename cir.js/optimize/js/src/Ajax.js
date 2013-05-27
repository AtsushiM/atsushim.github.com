Global.Ajax = function(config) {
    'use strict';

    var Mine = Global.Ajax,
        instanse = {
            jssrc: function(vars) {
                var ajax = new C.Ajax({
                        url: vars.src + '?update=' + Date.now(),
                        oncomplete: function(data) {
                            /* vars.result[vars.src] = encodeURIComponent(data); */
                            vars.result[vars.src] = data;
                            vars.callback();
                        }
                    });
            },
            closurecompiler: function(vars) {
                var url = 'http://closure-compiler.appspot.com/compile',
                    level = 'compilation_level=ADVANCED_OPTIMIZATIONS',
                    format = 'output_format=text',
                    info = 'output_info=compiled_code',
                    query = '';

                query = level + '&' + format + '&' + info + '&' +
                    '&js_code=' + vars.src;

                new C.Ajax({
                    url: url,
                    type: 'POST',
                    query: query,
                    oncomplete: function(data) {
                        vars.callback(data);
                    }
                });
            }
        };

    return instanse;
};
