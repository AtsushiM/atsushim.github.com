// splitLoad
(function() {
    var load = [
            'XML',
            'View',
            'Validate',
            'Twitter',
            'Tweener',
            'Timer',
            'Throttle',
            'Sync',
            'Surrogate',
            'SSTrans',
            'SSAnime',
            'Sound',
            'SessionStorage',
            'ServerMeta',
            'Scroll',
            'ScriptLoad',
            'Route',
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
            'LocalStorage',
            'LimitText',
            'ImgLoad',
            'HashQuery',
            'Handle',
            'FPS',
            'FontImg',
            'Facebook',
            'ExternalInterface',
            'Event',
            'DragFlick',
            'DeviceShake',
            'DeviceOrientation',
            'DeviceMotion',
            'Deferred',
            'DateFactory',
            'DataStore',
            'Base',
            'Async',
            'Anvas',
            'AnimeFrame',
            'Ajax',
            'util',
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
            callback: function(ret) {
                /* setTimeout(function() { */
                    $selector
                        .removeClass('load')
                        .html(ret);
                /* }, 10000); */
            }
        });
    }
}());
