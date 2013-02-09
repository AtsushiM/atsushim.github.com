/* Test: "../../spec/_src/src/selector/test.js" */
Global['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    function base() {
    }
    base.prototype = Global['$'].methods;

    /* _parent = _parent || doc; */

    if (isString(query)) {
        _parent = _parent || doc;
        $el = _parent.querySelectorAll(query);
    }
    else {
        $el = [query];
        query = EMPTY;
    }
    len = $el.length;
    instance = new base();

    instance.length = len;
    /* instance._selector = query; */
    /* instance._parent = _parent; */

    /* for (; i < len; i++) { */
    for (;len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
