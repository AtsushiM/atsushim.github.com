(function() {
    var $ = C.$,
        $sample = $('#sample'),
        $btn = $('#btn input');

    $btn.on(C.event.click, function() {
        $sample.addClass('addclass');
    });
}());
