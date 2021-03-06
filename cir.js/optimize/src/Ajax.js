// Ajax
C['Ajax'] = classExtendObserver({
    'dispose': this_stop__super,
    'init': function(config) {
        config = copyObject(config);

        var that = this,
            url = config['url'],
            type = config['type'] || 'GET',
            query = config['query'] || EMPTY,
            xhr = that._xhr = new XMLHttpRequest(),
            openargs;

        that['_super']();

        if (config.dataType == 'json') {
            that._json(config);
        }

        bindOnProp(that, config);

        if (!config['cache']) {
            if (!query) {
                query = {};
            }

            query['cir' + dateNow()] = '0';
        }
        if (query && isObject(query)) {
            query = encodeURI(makeQueryString(query));
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    that['emit']('complete', xhr.responseText, xhr);
                }
                else {
                    that['emit']('error', xhr);
                }
            }
        };

        if (type == 'GET') {
            if (noIndexOf(url, '?')) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = EMPTY;
        }

        that._query = query;

        openargs = [type, url];

        if (config['sync']) {
            openargs.push(FALSE);
        }

        xhr.open.apply(xhr, openargs);

        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencoded');
        }

        ifManualStart(that, config);
    },
    'start': function(/* varless */that) {
        that = this;

        emit_start(that);
        that._xhr.send(that._query);
    },
    'stop': function(/* varless */that) {
        that = this;

        that._xhr.abort();
        that['emit']('stop', that._xhr);
    },
    _json: function(config) {
        var oncomplete = config['oncomplete'],
            onerror = config['onerror'];

        if (oncomplete) {
            config['oncomplete'] = function(data) {
                oncomplete(jsonParse(data));
            };
        }
        if (onerror) {
            config['onerror'] = function(data) {
                onerror(data);
            };
        }
    }
});
