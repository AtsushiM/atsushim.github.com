(function() {
    var dependency = {
        },
        $ = C.$,
        $all = $('#all'),
        $create = $('#create'),
        $srcs = $('#srcfile input');

    $all.on(C.event.click, function() {
        var i = 0,
            len = $srcs.length,
            value = 'checked';

        if (!$all[0].checked) {
            value = '';
        }

        for (; i < len; i++) {
            if (!$srcs[i].disabled) {
                $srcs[i].checked = value;
            }
        }
    });
    $create.on(C.event.click, function() {
        var i = 0,
            count = 0,
            len = $srcs.length,
            srcs = {},
            callback = function() {
                count--;
                if (count === 0) {
                    console.log(srcs);
                    /* requestClosure(path); */
                }
            };

        for (; i < len; i++) {
            if ($srcs[i].checked) {
                count++;
                requestJSFileSrc($srcs[i].value, srcs, callback);
            }
        }
    });

    function requestJSFileSrc(src, obj, callback) {
        var ajax = new C.Ajax();

        ajax.request({
            url: src,
            callback: function(data) {
                obj[src] = encodeURIComponent(data);
                callback();
            }
        });
    }

    function requestClosure(path) {
        var ajax = new C.Ajax(),
            uribase = location.protocol + '//' +
            location.hostname + location.pathname,
            i = 0,
            len = path.length,
            query;

        for (; i < len; i++) {
            path[i] = '&code_url=' + uribase + path[i];
        }

        ajax.request({
            url: 'http://atsushim.github.com/cir.js/js/optimize.js',
            callback: function(data) {
                console.log(data);

                query = makeRequestURI(data);

                ajax.request({
                    url: 'http://closure-compiler.appspot.com/compile',
                    type: 'POST',
                    query: query,
                    callback: function(data, xhr) {
                        console.log(xhr);
                    }
                });
            }
        });

        function makeRequestURI(data) {
            var jssrc = 'js_code=' + encodeURIComponent(data),
                level = 'compilation_level=SIMPLE_OPTIMIZATIONS',
                format = 'output_format=text',
                info = 'output_info=compiled_code';

            return level + '&' + format + '&' + info + '&' + jssrc;
        }
    }
}());
