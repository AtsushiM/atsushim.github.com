Global.Dependency = function(config) {
    'use strict';

    var Mine = Global.Dependency,
        instanse = {
            active: {
                selector_methods: [
                    'selector'
                ],
                selector_methods_animate: [
                    'selector',
                    'selector_methods',
                    'Tweener',
                    'Animation'
                ],
                ExternalInterface: [
                    'HashController',
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                ExternalInterface_Android: [
                    'HashController',
                    'ExternalInterface'
                ],
                ExternalInterface_IOS: [
                    'HashController',
                    'ExternalInterface'
                ],
                Sound: [
                    'Audio'
                ],
                Movie: [
                    'Video'
                ]
            },
            passive: {
                selector: [
                    'selector_methods',
                    'selector_methods_animate'
                ],
                selector_methods: [
                    'selector_methods_animate'
                ],
                HashController: [
                    'ExternalInterface',
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                ExternalInterface: [
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                Tweener: [
                    'selector_methods_animate'
                ],
                Audio: [
                    'Sound'
                ],
                Video: [
                    'Movie'
                ]
            }
        };

    return instanse;
};
