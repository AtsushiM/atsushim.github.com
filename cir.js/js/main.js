(function(){function m(a){a[0]&&(a.addClass(e),h.set(a.attr("id"),1))}function n(a){a[0]&&(a.removeClass(e),h.remove(a.attr("id")))}function k(a){a[0]&&(a.addClass(f),l.set(a.attr("id"),1))}var d={},b=C.$,e="close",f="open",h=new C.LocalStorage({namespace:e}),l=new C.LocalStorage({namespace:f});d.init=function(a){a=h.get();var c=l.get(),p=location.hash.split("#")[1],g;for(g in a)m(b("#"+g));p&&k(b("#"+p));for(g in c)k(b("#"+g))};(function(){function a(a){var c=C.$("#"+a+" .load");new C.Ajax({url:"/cir.js/classes/"+
a+".html",oncomplete:function(a){c.removeClass("load").html(a)}})}for(var c="WindowLoad XML View Validate Twitter Tweener Throttle Sync Surrogate SSAnime Sound SessionStorage ServerMeta Scroll ScriptLoad Router Rollover Progress PreRender PC Orientation Ollection Observer Movie Model Modal Mobile LowPassFilter LocalStorage LimitText ImgLoad HashQuery FPS FontImg Facebook ExternalInterface Event DragFlick DeviceShake DeviceOrientation DeviceMotion DateFactory DataStore Calc Base Async Anvas AnimeFrame Ajax util template ssease ease dom selector".split(" "),
b=c.length;b--;)a(c[b])})();d.localLink=function(a){var c=new C.Scroll;return b('a[href^="#"]').on(C.e.CLICK,function(a){var g=b(this),d=b(g.attr("href"));n(d);c.smooth(d[0],function(){location.hash=g.attr("href").split("#")[1]});C.util.eventPrevent(a)})};d.submenu=function(a){function c(){function a(){var c=document.body.clientHeight-d[0].offsetHeight-f-h-window.scrollY;0<c&&(c=0);e.css({marginTop:c})}var c=this.innerHeight,e=b("#sub"),f=e[0].offsetHeight,h=e[0].offsetTop,k="fixed",l="on",m=new C.Throttle({waittime:25,
callback:a});f+h>c?(k="static",l="off"):a();e.css({position:k});b(window)[l]("scroll",function(){m.request()})}b("#sub");var d=b("#footer");b(window).on(C.e.RESIZE,c).on(C.e.LOAD,c)};d.toggle=function(a){a=b("#main");a.delegate("cls",C.e.CLICK,function(){var a=b(this).parent();return a.hasClass(e)?n(a):m(a)});a.delegate("method",C.e.CLICK,function(){var a=b(this).parent();if(!a.hasClass(f))return k(a);a[0]&&(a.removeClass(f),l.remove(a.attr("id")))})};d.init();d.localLink();d.submenu();d.toggle()})();
