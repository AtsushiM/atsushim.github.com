DOC.toggle = function(config) {
    'use strict';

    return $('#main').find('dt, h3').on(C.event.click, function() {
        var $parent = $(this).parent();

        if (!$parent.hasClass(clsOpen)) {
            return addOpen($parent);
        }

        return removeOpen($parent);
    });
};
