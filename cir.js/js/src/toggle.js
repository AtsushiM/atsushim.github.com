DOC.toggle = function(config) {
    'use strict';

    var $main = $('#main');

    $main.find('dt').on(C.e.CLICK, function() {
        var $parent = $(this).parent();

        if ($parent.hasClass(clsClose)) {
            return removeClose($parent);
        }

        return addClose($parent);
    });

    $main.find('h3').on(C.e.CLICK, function() {
        var $parent = $(this).parent();

        if (!$parent.hasClass(clsOpen)) {
            return addOpen($parent);
        }

        return removeOpen($parent);
    });
};
