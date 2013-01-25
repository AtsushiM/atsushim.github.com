/* Test: "%JASMINE_TEST_PATH%" */
(function() {
var Shake,
    mode,
    mobile = new C['Mobile']();

if (mobile['isMobile']()) {
    if (Global['DeviceMotion']['support']) {
        Shake = Global['DeviceMotion'];
        mode = 'DeviceMotion';
    }
    else if (Global['DeviceOrientation']['support']) {
        Shake = Global['DeviceOrientation'];
        mode = 'DeviceOrientation';
    }
}
mobile = mobile['dispose']();

if (!Shake) {
    Global['DeviceShake'] = {
        'support': FALSE
    };
    return false;
}

Global['DeviceShake'] = klass({
    'extend': Base,
    'init': function() {
        this['_super']();
        this._shaker = new Shake();
    },
    'properties': {
        'dispose': function() {
            this['unbind']();
            this._orgdis();
        },
        'bind': function(handler) {
            var wraphandle;
            if (mode === 'DeviceMotion') {
                wraphandle = function(e) {
                    e = e['rotationRate'];
                    e = {
                        'alpha': e['alpha'],
                        'beta': e['beta'],
                        'gamma': e['bamma']
                    };
                    handler(e);
                };
            }
            else {
                wraphandle = function(e) {
                    e = {
                        'alpha': e['alpha'],
                        'beta': e['beta'],
                        'gamma': e['bamma']
                    };
                    handler(e);
                };
            }

            this._shaker['bind'](wraphandle);
        },
        'unbind': function() {
            this._shaker['unbind']();
        }
    }
});
Global['DeviceShake']['support'] = TRUE;

}());
