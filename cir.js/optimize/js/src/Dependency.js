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
                require: [
                    'ElementLoad',
                    'Observer',
                    'Progress',
                    'Ajax',
                    'ScriptLoad'
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
                Ajax: [
                    'Observer'
                ],
                PreRender: [
                    'Observer'
                ],
                WindowLoad: [
                    'Observer'
                ],
                ScriptLoad: [
                    'ElementLoad',
                    'Observer',
                    'Progress'
                ],
                ImgLoad: [
                    'ElementLoad',
                    'Observer',
                    'Progress'
                ],
                Async: [
                    'AbstractTask',
                    'Observer'
                ],
                Sync: [
                    'AbstractTask',
                    'Observer'
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
                Ajax: [
                    'require'
                ],
                ScriptLoad: [
                    'require'
                ],
                DataStore: [
                    'Model'
                ],
                Observer: [
                    'require',
                    'Ajax',
                    'PreRender',
                    'WindowLoad',
                    'ScriptLoad',
                    'ImgLoad',
                    'Model',
                    'Async',
                    'Sync'
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
                    'require',
                    'ImgLoad',
                    'ScriptLoad'
                ],
                AbstractTask: [
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
                AbstractTask: [
                    'Async',
                    'Sync'
                ],
                ElementLoad: [
                    'ImgLoad',
                    'ScriptLoad'
                ]
            }
        };

    return instanse;
};
