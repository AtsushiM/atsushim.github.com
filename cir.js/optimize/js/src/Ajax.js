Global.Ajax = function(config) {
    'use strict';

    var Mine = Global.Ajax,
        instanse = {
            jssrc: function(vars) {
                var ajax = new C.Ajax();

                ajax.request({
                    url: vars.src,
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
