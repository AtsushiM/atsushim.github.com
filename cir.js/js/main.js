(function() {
    var $ = C.selector,
        $dl = $('#main dl'),
        e = new C.Event(),
        i = 0,
        len = $dl.length;

    for (; i < len; i++) {
        bind($dl[i]);
    }

    function bind(element) {
        var $dl = $(element),
            $dt = $dl.find('dt'),
            $init = $dl.find('.init'),
            cls = 'open';

        $dt.on(e.switchclick, function() {
            $dl.toggleClass(cls);
            if ($dl.hasClass(cls)) {
                $init.show();
            }
            else {
                $init.hide();
            }
        });
    }
}());
