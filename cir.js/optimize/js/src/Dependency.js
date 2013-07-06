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
                    'Scroll',
                    'Observer'
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
                    'Storage',
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
                    'Observer'
                ],
                ImgLoad: [
                    'ElementLoad',
                    'Observer'
                ],
                Async: [
                    'AbstractTask',
                    'Observer'
                ],
                Sync: [
                    'AbstractTask',
                    'Observer'
                ],
                LowPassFilter: [
                    'Calc'
                ],
                Parallax: [
                    'Observer',
                    'Scroll',
                    'selector',
                    'selector_methods'
                ]
            },
            passive: {
                selector: [
                    'selector_methods',
                    'selector_methods_animate',
                    'View',
                    'Parallax'
                ],
                selector_methods: [
                    'selector_methods_animate',
                    'View',
                    'Parallax'
                ],
                Ajax: [
                    'require'
                ],
                ScriptLoad: [
                    'require'
                ],
                Storage: [
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
                    'Sync',
                    'Scroll',
                    'Modal'
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
                    'Modal',
                    'Parallax'
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
                AbstractTask: [
                    'Async',
                    'Sync'
                ],
                Calc: [
                    'LowPassFilter'
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
