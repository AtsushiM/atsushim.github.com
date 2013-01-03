(function() {
    var $ = C.selector,
        $dl = $('#main dl'),
        e = new C.Event();

    $dl.on(e.switchclick, function() {
        var $this = $(this),
            $init = $this.find('.init'),
            cls = 'oepn';

        $this.toggleClass(cls);
        if ($this.hasClass(cls)) {
            $init.show();
        }
        else {
            $init.hide();
        }
    });
}());
