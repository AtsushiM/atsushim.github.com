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
                    'HashQuery',
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                ExternalInterface_Android: [
                    'HashQuery',
                    'ExternalInterface'
                ],
                ExternalInterface_IOS: [
                    'HashQuery',
                    'ExternalInterface'
                ],
                Audio: [
                    'Embed'
                ],
                Sound: [
                    'Embed',
                    'Media',
                    'Audio'
                ],
                Video: [
                    'Embed'
                ],
                Movie: [
                    'Embed',
                    'Media',
                    'Video'
                ],
                Media: [
                    'Embed',
                    'Audio',
                    'Video'
                ],
                LocalStorage: [
                    'WebStorage'
                ],
                SessionStorage: [
                    'WebStorage'
                ],
                DeviceMotion: [
                    'DeviceAction'
                ],
                DeviceOrientation: [
                    'DeviceAction'
                ],
                DeviceShake: [
                    'DeviceAction',
                    'DeviceMotion',
                    'DeviceOrientation'
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
                HashQuery: [
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
                Embed: [
                    'Audio',
                    'Video',
                    'Media',
                    'Sound',
                    'Movie'
                ],
                Media: [
                    'Audio',
                    'Video',
                    'Sound',
                    'Movie'
                ],
                Audio: [
                    'Sound'
                ],
                Video: [
                    'Movie'
                ],
                WebStorage: [
                    'LocalStorage',
                    'SessionStorage'
                ],
                DeviceAction: [
                    'DeviceMotion',
                    'DeviceOrientation',
                    'DeviceShake'
                ],
                DeviceMotion: [
                    'DeviceShake'
                ],
                DeviceOrientation: [
                    'DeviceShake'
                ]
            },
            waste: {
                ExternalInterface: [
                    'ExternalInterface_Android',
                    'ExternalInterface_IOS'
                ],
                Media: [
                    'Audio',
                    'Video',
                    'Sound',
                    'Movie'
                ],
                DeviceAction: [
                    'DeviceMotion',
                    'DeviceOrientation',
                    'DeviceShake'
                ]
            }
        };

    return instanse;
};
