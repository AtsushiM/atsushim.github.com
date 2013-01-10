(function() {
var DOC = {},
    $ = C.$,
    clsClose = 'close',
    storage = new C.LocalStorage({
        namespace: clsClose
    });

function addClose($el) {
    if ($el[0]) {
        $el.addClass(clsClose);
        storage.set($el.attr('id'), 1);
    }
}
function removeClose($el) {
    if ($el[0]) {
        $el.removeClass(clsClose);
        storage.remove($el.attr('id'));
    }
}
