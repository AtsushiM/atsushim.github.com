(function(){var b,g=C.$;b=C.Event.extend({createjssrc:"a",srccreatestart:"b",srcloaded:"c"});b={observer:new C.Observer,e:new b,el:new function(){return{check_all:g("#all"),btn_create:g("#create"),srcs:g("#srcfile li input"),srcarea:g("#srcarea")}},dependency:new function(){return{active:{selector_methods:["selector"],selector_methods_animate:["selector","selector_methods","Tweener","Animation"],ExternalInterface:["HashQuery","ExternalInterface_Android","ExternalInterface_IOS"],ExternalInterface_Android:["HashQuery",
"ExternalInterface"],ExternalInterface_IOS:["HashQuery","ExternalInterface"],Audio:["Embed"],Sound:["Embed","Media","Audio"],Video:["Embed"],Movie:["Embed","Media","Video"],Modal:["Scroll"],Media:["Embed","Audio","Video"],LocalStorage:["WebStorage"],SessionStorage:["WebStorage"],DeviceMotion:["DeviceAction"],DeviceOrientation:["DeviceAction"],DeviceShake:["DeviceAction","DeviceMotion","DeviceOrientation"],View:["selector","selector_methods"],Model:["selector","DataStore","Observer"],ScriptLoad:["Async"],
ImgLoad:["Async"]},passive:{selector:["selector_methods","selector_methods_animate","View"],selector_methods:["selector_methods_animate","View"],DataStore:["Model"],Observer:["Model"],HashQuery:["ExternalInterface","ExternalInterface_Android","ExternalInterface_IOS"],ExternalInterface:["ExternalInterface_Android","ExternalInterface_IOS"],Tweener:["selector_methods_animate"],Embed:["Audio","Video","Media","Sound","Movie"],Media:["Audio","Video","Sound","Movie"],Scroll:["Modal"],Audio:["Sound"],Video:["Movie"],
WebStorage:["LocalStorage","SessionStorage"],DeviceAction:["DeviceMotion","DeviceOrientation","DeviceShake"],DeviceMotion:["DeviceShake"],DeviceOrientation:["DeviceShake"],Async:["ImgLoad","ScriptLoad"]},waste:{ExternalInterface:["ExternalInterface_Android","ExternalInterface_IOS"],Media:["Audio","Video","Sound","Movie"],DeviceAction:["DeviceMotion","DeviceOrientation","DeviceShake"]}}},ajax:new function(){return{jssrc:function(a){(new C.Ajax).request({url:a.src+"?update="+Date.now(),callback:function(c){a.result[a.src]=
c;a.callback()}})},closurecompiler:function(a){var c=new C.Ajax,f="",f="compilation_level=ADVANCED_OPTIMIZATIONS&output_format=text&output_info=compiled_code&&js_code="+a.src;c.request({url:"http://closure-compiler.appspot.com/compile",type:"POST",query:f,callback:function(c){a.callback(c)}})}}}};b.makeSrc=new function(a){var c=a.e,f=a.observer,b=a.ajax,d=a.el,e={make:function(a){for(var e="",m=0,j=d.srcs.length,k,l="/* optimize: ",q;m<j;m++)k=d.srcs[m].value,a[k]&&(q=g(d.srcs[m]).parent().find(".name"),
q.length&&(l+=q.html()+" "),e+=encodeURIComponent(a[k]));l+="*/\n";b.closurecompiler({src:e,callback:function(d){f.fire(c.createjssrc,a["src/clouser_start.js"]+l+d+a["src/clouser_end.js"])}});return e}};f.on(c.srcloaded,function(a){e.make(a)});return e}(b);b.btnCreate=new function(a){var c=a.e,f=a.observer,b=a.ajax,d=a.el,e={requestJS:function(){var a=0,h=0,g=d.srcs.length,j={},k=function(){h--;0===h&&f.fire(c.srcloaded,j)};f.fire(c.srccreatestart,j);for(e.unbind();a<g;a++)d.srcs[a].checked&&(h++,
b.jssrc({src:"/cir.js/optimize"+d.srcs[a].value,result:j,callback:k}))},unbind:function(){d.btn_create.attr("value","request...");return d.btn_create.off(C.e.CLICK,e.requestJS)},bind:function(){d.btn_create.attr("value","Create.");return d.btn_create.on(C.e.CLICK,e.requestJS)}};e.bind();f.on(c.createjssrc,function(){e.bind()});return e}(b);b.chkAll=new function(a){var c=a.el;a={toggle:function(){var a=0,b=c.srcs.length,d="checked";for(c.check_all[0].checked||(d="");a<b;a++)c.srcs[a].disabled||(c.srcs[a].checked=
d)}};c.check_all.on(C.e.CLICK,a.toggle);return a}(b);b.chkSrc=new function(a){var c=a.dependency,b,n={checkDependency:function(){var a=g(this).parent().parent(),e="passive",p=c.waste,h;this.checked&&(e="active");(b=c[e][a[0].id])&&n.setDependency(b,this.checked);if(!this.checked)for(h in p){e=!0;for(a=p[h].length;a--;)if(g("#"+p[h][a]+" input")[0].checked){e=!1;break}e&&(g("#"+h+" input")[0].checked=!1)}},setDependency:function(a,c){for(var b=0,f=a.length;b<f;b++)g("#"+a[b]+" input")[0].checked=c}};
a.el.srcs.on(a.e.CHANGE,n.checkDependency);return n}(b);b.srcArea=new function(a){var b=a.e,f=a.observer,g=a.el,d={setValue:function(a){g.srcarea[0].value=a},loading:function(){d.setValue("Now Create...")}};f.on(b.createjssrc,d.setValue);f.on(b.srccreatestart,d.loading);return d}(b)})();
