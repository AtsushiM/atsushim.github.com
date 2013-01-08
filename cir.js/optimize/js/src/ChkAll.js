Global.ChkAll = function(config) {
    'use strict';

    var Mine = Global.ChkAll,
        e = config.e,
        el = config.el,
        instanse = {
            toggle: function() {
                var i = 0,
                    len = el.srcs.length,
                    value = 'checked';

                if (!el.check_all[0].checked) {
                    value = '';
                }

                for (; i < len; i++) {
                    if (!el.srcs[i].disabled) {
                        el.srcs[i].checked = value;
                    }
                }
            }
        };

    el.check_all.on(C.event.click, instanse.toggle);

    return instanse;
};
