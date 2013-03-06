/* Test: "../../spec/_src/src/selector/test.js" */
var $base = function(){};
C['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    if (typeof query == 'string') {
        _parent = _parent || doc;

        if (
            /^(.+[\#\.\s\[>:,]|[\[:])/.test(query)
        ) {
            $el = _parent.querySelectorAll(query);
        }
        else if (query[0] == '#') {
            $el = [_parent.getElementById(query.substring(1, query.length))];
        }
        else if (query[0] == '.') {
            $el =
                _parent
                .getElementsByClassName(query.substring(1, query.length));
        }
        else {
            $el = _parent.getElementsByTagName(query);
        }
    }
    else {
        $el = [query];
    }

    len = $el.length;
    instance = new $base();

    instance.length = len;

    for (; len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
