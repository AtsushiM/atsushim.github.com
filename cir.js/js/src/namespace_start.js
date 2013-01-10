(function() {
var DOC = {},
    $ = C.$,
    clsClose = 'close',
    clsOpen = 'open',
    storageClose = new C.LocalStorage({
        namespace: clsClose
    }),
    storageOpen = new C.LocalStorage({
        namespace: clsOpen
    });

function addClose($el) {
    if ($el[0]) {
        $el.addClass(clsClose);
        storageClose.set($el.attr('id'), 1);
    }
}
function removeClose($el) {
    if ($el[0]) {
        $el.removeClass(clsClose);
        storageClose.remove($el.attr('id'));
    }
}

function addOpen($el) {
    if ($el[0]) {
        $el.addClass(clsOpen);
        storageOpen.set($el.attr('id'), 1);
    }
}
function removeOpen($el) {
    if ($el[0]) {
        $el.removeClass(clsOpen);
        storageOpen.remove($el.attr('id'));
    }
}
