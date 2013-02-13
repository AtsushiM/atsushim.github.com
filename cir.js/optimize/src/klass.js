/* Test: "../../spec/_src/src/klass/test.js" */
C['klass'] = function(config) {
    var init = config['init'] || function() {},
        wrap = function() {
            var inits = ancestors(this, '__init__'),
                i = inits.length;

            for (; i--;) {
                inits[i].apply(this, arguments);
            }
        },
        prop = config['prop'],
        extend = config['extend'];

    if (extend) {
        C['extend'](wrap, extend);
    }
    wrap.prototype['__init__'] = init;

    override(wrap.prototype, prop);

    return wrap;
};
C['klass']['ancestors'] = ancestors;

function ancestors(obj, propname) {
    var props = [],
        flg = TRUE;

    while (flg) {
        if (obj[propname] && props[props.length - 1] !== obj[propname]) {
            props.push(obj[propname]);
        }
        if (obj['_superclass'] && obj['_superclass'].prototype) {
            obj = obj['_superclass'].prototype;
        }
        else {
            flg = FALSE;
        }
    }

    return props;
}
function klassExtend(kls, init, prop) {
    return C['klass']({
        'extend': kls,
        'init': init,
        'prop': prop
    });
}
function klassExtendBase(init, prop) {
    return klassExtend(C['Base'], init, prop);
}
