(function(){function j(a){a[0]&&(a.addClass(d),f.set(a.attr("id"),1))}function m(a){a[0]&&(a.removeClass(d),f.remove(a.attr("id")))}function g(a){a[0]&&(a.addClass(e),h.set(a.attr("id"),1))}var c={},b=C.$,d="close",e="open",f=new C.LocalStorage({namespace:d}),h=new C.LocalStorage({namespace:e});c.init=function(){var a=f.get(),l=h.get(),c=location.hash.split("#")[1],k;for(k in a)j(b("#"+k));c&&g(b("#"+c));for(k in l)g(b("#"+k))};c.localLink=function(){return b('a[href^="#"]').on(C.event.click,function(){m(b(b(this).attr("href")))})};
c.submenu=function(){function a(){function a(){var b=document.body.clientHeight-l[0].offsetHeight-e-f-window.scrollY;0<b&&(b=0);d.css({marginTop:b})}var c=this.innerHeight,d=b("#sub"),e=d[0].offsetHeight,f=d[0].offsetTop,g="fixed",h="on",j=new C.Throttle({waittime:25,callback:a});e+f>c?(g="static",h="off"):a();d.css({position:g});b(window)[h]("scroll",function(){j.request()})}b("#sub");var l=b("#footer");b(window).on(C.event.resize,a);b(window).on(C.event.load,a)};c.toggle=function(){var a=b("#main");
a.find("dt").on(C.event.click,function(){var a=b(this).parent();return a.hasClass(d)?m(a):j(a)});a.find("h3").on(C.event.click,function(){var a=b(this).parent();if(!a.hasClass(e))return g(a);a[0]&&(a.removeClass(e),h.remove(a.attr("id")))})};c.init();c.localLink();c.submenu();c.toggle()})();
