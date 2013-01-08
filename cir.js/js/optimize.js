(function() {
    var $ = C.$,
        $all = $('#all'),
        $create = $('#create'),
        $srcs = $('#srcfile input'),
        path = [];

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
            len = $srcs.length;

        path = [];

        for (; i < len; i++) {
            if ($srcs[i].checked) {
                path.push($srcs[i].value);
            }
        }

        requestClosure(path);
    });

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
            var jssrc = 'js_code=' + data,
                level = 'compilation_level=SIMPLE_OPTIMIZATIONS',
                format = 'output_format=text',
                info = 'output_info=compiled_code';

            return level + '&' + format + '&' + info + '&' + jssrc;
        }
    }
}());
