// Parallax
C['Parallax'] = classExtend(C['Scroll'], {
    'dispose': function() {
        this['detach']();
        this['_super']();
    },
    'init': function(config) {
        var that = this;

        that['_super']();

        that._beforeY = that['getY']();

        that._switcher = config['switcher'];

        bindOnProp(that, config);

        that._attachaction = function() {
            that._switchanime(that['getY']());
        };
        ifManualStart(that, config, 'attach');
    },
    'attach': function() {
        C['$'](win)['on']('scroll', this._attachaction);
    },
    'detach': function() {
        C['$'](win)['off']('scroll', this._attachaction);
    },
    _switchanime: function(y) {
        var that = this,
            beforeY = that._beforeY,
            temp = that._switcher(y, beforeY),
            i = 0,
            len;

        if (isArray(temp)) {
            len = temp.length;

            for (; i < len; i++) {
                that['emit'](temp[i], y, beforeY);
            }
        }
        else if (isString(temp)) {
            that['emit'](temp, y, beforeY);
        }

        that._beforeY = y;
    }
});
