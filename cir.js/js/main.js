(function() {
    var $ = C.selector,
        $main = $('#main'),
        $click = $main.find('dt, h3'),
        e = new C.Event();

    $click.on(e.switchclick, function() {
        open(this);
    });

    function open(_this) {
        var $parent = $(_this).parent(),
            cls = 'open';

        $parent.toggleClass(cls);
    }
}());
