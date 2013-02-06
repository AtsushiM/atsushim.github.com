Global.ChkSrc = function(config) {
    'use strict';

    var Mine = Global.ChkSrc,
        e = config.e,
        el = config.el,
        dependency = config.dependency,
        target,
        instanse = {
            checkDependency: function() {
                var $parent = $(this).parent().parent(),
                    key = 'passive',
                    waste = dependency.waste,
                    i,
                    j,
                    flg;

                if (this.checked) {
                    key = 'active';
                }

                target = dependency[key][$parent[0].id];

                if (target) {
                    instanse.setDependency(target, this.checked);
                }

                if (!this.checked) {
                    for (i in waste) {
                        flg = true;
                        j = waste[i].length;

                        for (; j--;) {
                            if ($('#' + waste[i][j] + ' input')[0].checked) {
                                flg = false;
                                break;
                            }
                        }

                        if (flg) {
                            $('#' + i + ' input')[0].checked = false;
                        }
                    }
                }
            },
            setDependency: function(ary, bool) {
                var i = 0,
                    len = ary.length;

                for (; i < len; i++) {
                    $('#' + ary[i] + ' input')[0].checked = bool;
                }
            }
        };

    el.srcs.on(e.CHANGE, instanse.checkDependency);

    return instanse;
};
