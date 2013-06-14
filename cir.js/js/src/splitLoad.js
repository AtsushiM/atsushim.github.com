// splitLoad
(function() {
    var load = [
            'WindowLoad',
            'XML',
            'View',
            'Validate',
            'Twitter',
            'Tweener',
            'Throttle',
            'Sync',
            'Surrogate',
            'SSAnime',
            'Sound',
            'SessionStorage',
            'ServerMeta',
            'Scroll',
            'ScriptLoad',
            'Router',
            'Rollover',
            'Progress',
            'PreRender',
            'PC',
            'Orientation',
            'Ollection',
            'Observer',
            'Movie',
            'Model',
            'Modal',
            'Mobile',
            'LowPassFilter',
            'LocalStorage',
            'LimitText',
            'ImgLoad',
            'HashQuery',
            'FPS',
            'FontImg',
            'Facebook',
            'ExternalInterface',
            'Event',
            'DragFlick',
            'DeviceShake',
            'DeviceOrientation',
            'DeviceMotion',
            'DateFactory',
            'DataStore',
            'Calc',
            'Base',
            'BackForwardCache',
            'Async',
            'Anvas',
            'AnimeFrame',
            'Ajax',
            'util',
            'template',
            'ssease',
            'ease',
            'dom',
            'selector'
        ],
        i = load.length;

    for (; i--;) {
        loadClass(load[i]);
    }

    function loadClass(id) {
        var $selector = C.$('#' + id + ' .load');

        new C.Ajax({
            url: '/cir.js/classes/' + id + '.html',
            oncomplete: function(ret) {
                /* setTimeout(function() { */
                    $selector
                        .removeClass('load')
                        .html(ret);
                /* }, 10000); */
            }
        });
    }
}());
