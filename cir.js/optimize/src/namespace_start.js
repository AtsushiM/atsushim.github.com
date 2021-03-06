// Cool is Right.
C = {};

function cssCubicBezierFormat(text) {
    return 'cubic-bezier(' + text + ')';
}
function checkCSSAnimTranCheck(prop, event_key) {
    var el = create('p'),
        support = FALSE,
        prefix,
        css_prefix = EMPTY,
        i = prop.length,
        style,
        sheet,
        regex = new RegExp('^(.*?)' + prop[0] + '$', 'i');

    for (; i--;) {
        if (isDefined(el.style[prop[i]])) {
            support = TRUE;
            prefix = prop[i].match(regex)[1];

            if (prefix) {
                css_prefix = str2LowerCase(prefix);
                event_key = css_prefix + event_key;
                css_prefix = '-' + css_prefix + '-';
            }
            else {
                event_key = str2LowerCase(event_key);
            }

            style = append($('head'),
                create('style', {
                    type: 'text/css'
                }));
            sheet = style.sheet;

            break;
        }
    }

    return {
        event_key: event_key,
        support: support,
        prefix: prefix,
        css_prefix: css_prefix,
        sheet: sheet
    };
}

function jsonParse(text) {
    return JSON['parse'](text);
}
function jsonStringify(json) {
    return JSON['stringify'](json);
}

function str2LowerCase(a) {
    return a['toLowerCase']();
}

function noIndexOf(str, needle) {
    return str.indexOf(needle) != -1 ? TRUE : FALSE;
}

function splitSuffix(value) {
    return (EMPTY + (value || EMPTY)).match(/^(.*?)(-?[0-9\.]+)(.*)$/);
}

function bindOnProp(that, config /* varless */, i, temp) {
    // var i,
    //     temp;

    for (i in config) {
        if (temp = i.match(/^on(.+)$/)) {
            that['on'](temp[1], config[i]);
        }
    }
}

function ifManualStart(that, config, method) {
    if (!config['manual']) {
        that[method || 'start']();
    }
}

function sheetAddCSSRule(sheet, id, rule) {
    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

function this_stop__super() {
    this['stop']();
    this['_super']();
}
function this_uncontract(id /* varless */, temp, arg) {
    if (id) {
        // var temp = this._disposestore,
        //     arg = temp[id];
        temp = this._disposestore,
        arg = temp[id];

        delete temp[id];

        off(arg[0], arg[1], arg[2]);
    }
}
function this_contract(el, e, handler /* varless */, that, id) {
    that = this;

    if (!that._disposestore) {
        that._disposestore = {};
    }
    /* var id = ++this._disposecountid; */
    id = ++that._disposecountid;

    on(el, e, handler);
    that._disposestore[id] = [el, e, handler];

    return id;
}

function emit_complete(that, arg) {
    that['emit']('complete', arg);
}
function emit_nexttask(that, arg) {
    that['emit']('nexttask', arg);
}
function emit_start(that) {
    that['emit']('start');
}
function emit_progress(that, arg) {
    that['emit']('progress', arg);
}

function wrap_arg1_remove(func, that) {
    return function() {
        return func.apply(that, toArray(arguments).slice(1));
    };
}

var system_temp,
    win = window,
    doc = document,
    doc_head = doc.head || $('head'),
    TRUE = true,
    FALSE = false,
    NULL = null,
    EMPTY = '',
    NULLOBJ = {},
    isTouch = isTouchable(),
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    csseaseOutExpo = cssCubicBezierFormat('0.19,1,0.22,1'),
    easebackrate = 1.70158,
    class_initializing = FALSE,
    class_fnTest = /0/.test(function() {
        0;
    }) ? /\b_super\b/ : /.*/,
    required_obj = {},
    label_w = 'width',
    label_h = 'height',

Class,
Base,
Observer,
Storage,
Audio,
Video,
ev,
AbstractTask,
ElementLoad,
WindowAction,
ExternalAndroid,
ExternalIOS,
Media,
Tweener,
Tweener_Items,
WebStorage,
HashQuery,
ScriptLoad,
DeviceOrientation,
DeviceMotion,
SSAnime,
Model,
Calc,
PC_browser,
$_methods,
animeframe_check,
animeframe_len,
animeframe_animeframe,
animeframe_cancelframe,
selector_Animation,
selector_csssupport,
selector_EASE,
/* windowload_loaded = FALSE, */
windowload_loaded,
windowload_winload,
deviceshake_Shake,
deviceshake_convert,
servermeta_xhr,
servermeta_isLoaded;
