DOC.toggle = function(config) {
    'use strict';

    var $main = $('#main');

    $main.delegate('.cls', C.e.CLICK, function() {
        var $parent = $(this).parent();

        if ($parent.hasClass(clsClose)) {
            return removeClose($parent);
        }

        return addClose($parent);
    });

    $main.delegate('.method', C.e.CLICK, function() {
        var $parent = $(this).parent();

        if (!$parent.hasClass(clsOpen)) {
            return addOpen($parent);
        }

        return removeOpen($parent);
    });
};
