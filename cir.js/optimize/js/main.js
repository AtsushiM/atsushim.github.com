(function(){var b,f=C.$;b=C.klass({extend:C.Event,properties:{createjssrc:"a",srccreatestart:"b",srcloaded:"c"}});b={observer:new C.Observer,e:new b,el:new function(){return{check_all:f("#all"),btn_create:f("#create"),srcs:f("#srcfile input"),srcarea:f("#srcarea")}},dependency:new function(){return{active:{selector_methods:["selector"],selector_methods_animate:["selector","selector_methods","Tweener"],ExternalInterface:["HashController","ExternalInterface_Android","ExternalInterface_IOS"]},passive:{selector:["selector_methods",
"selector_methods_animate"],selector_methods:["selector_methods_animate"],HashController:["ExternalInterface","ExternalInterface_Android","ExternalInterface_IOS"],ExternalInterface:["ExternalInterface_Android","ExternalInterface_IOS"],Tweener:["selector_methods_animate"]}}},ajax:new function(){return{jssrc:function(a){(new C.Ajax).request({url:a.src,query:{update:Date.now()},callback:function(c){a.result[a.src]=encodeURIComponent(c);a.callback()}})},closurecompiler:function(a){var c=new C.Ajax,e=
"",e="compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code&&js_code="+a.src;c.request({url:"http://closure-compiler.appspot.com/compile",type:"POST",query:e,callback:function(c){a.callback(c)}})}}}};b.makeSrc=new function(a){var c=a.e,e=a.observer,b=a.ajax,d=a.el;a={make:function(a){for(var k="",h=0,f=d.srcs.length,j;h<f;h++)j=d.srcs[h].value,a[j]&&(k+=a[j]);b.closurecompiler({src:k,callback:function(a){e.fire(c.createjssrc,a)}});return k}};e.on(c.srcloaded,a.make);
return a}(b);b.btnCreate=new function(a){var c=a.e,e=a.observer,b=a.ajax,d=a.el,g={requestJS:function(){var a=0,h=0,f=d.srcs.length,j={},m=function(){h--;0===h&&e.fire(c.srcloaded,j)};e.fire(c.srccreatestart,j);for(g.unbind();a<f;a++)d.srcs[a].checked&&(h++,b.jssrc({src:d.srcs[a].value,result:j,callback:m}))},unbind:function(){d.btn_create.attr("value","request...");return d.btn_create.off(C.event.click,g.requestJS)},bind:function(){d.btn_create.attr("value","Create.");return d.btn_create.on(C.event.click,
g.requestJS)}};g.bind();e.on(c.createjssrc,g.bind);return g}(b);b.chkAll=new function(a){var c=a.el;a={toggle:function(){var a=0,b=c.srcs.length,d="checked";for(c.check_all[0].checked||(d="");a<b;a++)c.srcs[a].disabled||(c.srcs[a].checked=d)}};c.check_all.on(C.event.click,a.toggle);return a}(b);b.chkSrc=new function(a){var c=a.dependency,b,l={checkDependency:function(){var a=f(this).parent().parent(),g="passive";this.checked&&(g="active");(b=c[g][a[0].id])&&l.setDependency(b,this.checked)},setDependency:function(a,
c){for(var b=0,e=a.length;b<e;b++)f("#"+a[b]+" input")[0].checked=c}};a.el.srcs.on(a.e.change,l.checkDependency);return l}(b);b.srcArea=new function(a){var b=a.e,e=a.observer,f=a.el,d={setValue:function(a){f.srcarea[0].value=a},loading:function(){d.setValue("Now Create...")}};e.on(b.createjssrc,d.setValue);e.on(b.srccreatestart,d.loading);return d}(b)})();
