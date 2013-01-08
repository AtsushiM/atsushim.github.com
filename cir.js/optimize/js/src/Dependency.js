Global.Dependency = function(config) {
    'use strict';

    var Mine = Global.Dependency,
        instanse = {
            selector_methods: [
                'selector'
            ],
            selector_methods_animate: [
                'selector',
                'selector_methods',
                'Tweener'
            ],
            ExternalInterface: [
                'HashController',
                'ExternalInterface_Android',
                'ExternalInterface_IOS'
            ]
        };

    return instanse;
};
