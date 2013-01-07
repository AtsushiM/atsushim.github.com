(function() {
var DOC = {},
    $ = C.selector,
    clsOpen = 'open',
    storage = new C.LocalStorage({
        namespace: clsOpen
    });

function addOpen($el) {
    $el.addClass(clsOpen);
    storage.set($el.attr('id'), 1);
}
function removeOpen($el) {
    $el.removeClass(clsOpen);
    storage.remove($el.attr('id'));
}
