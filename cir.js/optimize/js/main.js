(function(){var k,l,m,n,o,p,q,r;k=function(){return{jssrc:function(a){(new C.Ajax).request({url:a.src,callback:function(b){a.result[a.src]=encodeURIComponent(b);a.callback()}})},closurecompiler:function(a){var b=new C.Ajax,d="",d="compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code&&js_code="+a.src;b.request({url:"http://closure-compiler.appspot.com/compile",type:"POST",query:d,callback:function(b){a.callback(b)}})}}};l=function(a){var b=a.e,d=a.observer,e=a.ajax,c=
a.el,h={requestJS:function(){var a=0,f=0,j=c.srcs.length,g={},s=function(){f--;0===f&&d.fire(b.srcloaded,g)};d.fire(b.srccreatestart,g);for(h.unbind();a<j;a++)c.srcs[a].checked&&(f++,e.jssrc({src:c.srcs[a].value,result:g,callback:s}))},unbind:function(){c.btn_create.attr("value","request...");return c.btn_create.off(C.event.click,h.requestJS)},bind:function(){c.btn_create.attr("value","Create.");return c.btn_create.on(C.event.click,h.requestJS)}};h.bind();d.on(b.createjssrc,h.bind);return h};m=function(a){var b=
a.el,a={toggle:function(){var a=0,e=b.srcs.length,c="checked";for(b.check_all[0].checked||(c="");a<e;a++)b.srcs[a].disabled||(b.srcs[a].checked=c)}};b.check_all.on(C.event.click,a.toggle);return a};n=C.klass({extend:C.Event,properties:{createjssrc:"a",srccreatestart:"b",srcloaded:"c"}});o=function(){var a=C.$;return{check_all:a("#all"),btn_create:a("#create"),srcs:a("#srcfile input"),srcarea:a("#srcarea")}};p=function(){return{selector_methods:["selector"],selector_methods_animate:["selector","selector_methods",
"Tweener"],ExternalInterface:["HashController","ExternalInterface_Android","ExternalInterface_IOS"]}};q=function(a){var b=a.e,d=a.observer,e=a.ajax,c=a.el,a={make:function(a){for(var i="",f=0,j=c.srcs.length,g;f<j;f++)g=c.srcs[f].value,a[g]&&(i+=a[g]);e.closurecompiler({src:i,callback:function(a){d.fire(b.createjssrc,a)}});return i}};d.on(b.srcloaded,a.make);return a};r=function(a){var b=a.e,d=a.observer,e=a.el,c={setValue:function(a){e.srcarea[0].value=a},loading:function(){c.setValue("Now Create...")}};
d.on(b.createjssrc,c.setValue);d.on(b.srccreatestart,c.loading);return c};(function(){var a={observer:new C.Observer,e:new n,el:new o,dependency:new p,ajax:new k};a.makeSrc=new q(a);a.btnCreate=new l(a);a.chkAll=new m(a);a.srcArea=new r(a);return a})()})();
