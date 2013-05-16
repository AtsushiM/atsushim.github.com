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
                    'AnimeFrame',
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
                Modal: [
                    'Scroll'
                ],
                Media: [
                    'Embed',
                    'Audio',
                    'Video'
                ],
                Tweener: [
                    'AnimeFrame'
                ],
                LocalStorage: [
                    'WebStorage'
                ],
                SessionStorage: [
                    'WebStorage'
                ],
                DeviceMotion: [
                    'WindowAction'
                ],
                DeviceOrientation: [
                    'WindowAction'
                ],
                DeviceShake: [
                    'WindowAction',
                    'DeviceMotion',
                    'DeviceOrientation'
                ],
                View: [
                    'selector',
                    'selector_methods'
                ],
                Model: [
                    'selector',
                    'DataStore',
                    'Observer'
                ],
                ScriptLoad: [
                    'Progress'
                ],
                ImgLoad: [
                    'Progress'
                ],
                Async: [
                    'ExeQueue'
                ],
                Sync: [
                    'ExeQueue'
                ]
            },
            passive: {
                selector: [
                    'selector_methods',
                    'selector_methods_animate',
                    'View'
                ],
                selector_methods: [
                    'selector_methods_animate',
                    'View'
                ],
                DataStore: [
                    'Model'
                ],
                Observer: [
                    'Model'
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
                AnimeFrame: [
                    'Tweener',
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
                Scroll: [
                    'Modal'
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
                WindowAction: [
                    'DeviceMotion',
                    'DeviceOrientation',
                    'DeviceShake'
                ],
                DeviceMotion: [
                    'DeviceShake'
                ],
                DeviceOrientation: [
                    'DeviceShake'
                ],
                Progress: [
                    'ImgLoad',
                    'ScriptLoad'
                ],
                ExeQueue: [
                    'Async',
                    'Sync'
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
                WindowAction: [
                    'DeviceMotion',
                    'DeviceOrientation',
                    'DeviceShake'
                ],
                ExeQueue: [
                    'Async',
                    'Sync'
                ]
            }
        };

    return instanse;
};
