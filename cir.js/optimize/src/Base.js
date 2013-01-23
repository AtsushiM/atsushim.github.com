/* Test: "../../spec/_src/src/Base/test.js" */
Base = Global['Base'] = klass({
    'init': function() {
        this._dispose = {};
    },
    'properties': {
        id: 0,
        'dispose': function() {
            var i;

            if (this._dispose) {
                i = this._dispose.lenght;

                for (; i--;) {
                    off.apply(NULL, this._dispose[i]);
                }
            }

            for (i in this) {
                delete this[i];
            }

            this.__proto__ = NULL;
            return NULL;
        },
        ondispose: function(element, e, handler) {
            on(element, e, handler);
            this.id++;
            this._dispose[this.id] = [element, e, handler];

            return this.id;
        },
        offdispose: function(id) {
            var arg = this._dispose[id];

            delete this._dispose[id];

            off(arg[0], arg[1], arg[2]);
        },
        _orgdis: function() {
            this.__proto__.__proto__['dispose'].call(this);
        }
    }
});
