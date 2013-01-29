/* Test: "../../spec/_src/src/DataStore/test.js" */
var DataStoreName = 'DataStore';
Global[DataStoreName] = klassExtendBase(function(config) {
    this['_super'](config);

    this.data = {};

    return this.singleAct(DataStoreName);
}, {
    'set': function(key, val) {
        this.data[key] = val;
    },
    'get': function(key) {
        var ret = {},
            i;

        if (key) {
            return this.data[key];
        }

        for (i in this.data) {
            ret[i] = this.data[i];
        }

        return ret;
    },
    'remove': function(key) {
        if (!this.data[key]) {
            return FALSE;
        }

        delete this.data[key];
    },
    'reset': function() {
        this.data = {};
    }
});
