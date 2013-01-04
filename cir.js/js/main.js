(function() {
    var $ = C.selector,
        $dt = $('#main dl dt'),
        e = new C.Event();

    $dt.on(e.switchclick, function() {
        var $dl = $(this).parent(),
            $init = $dl.find('.init'),
            cls = 'open';

        $dl.toggleClass(cls);
        if ($dl.hasClass(cls)) {
            $init.show();
        }
        else {
            $init.hide();
        }
    });
}());
