(function(){var r,s,t,u,v,w,x,y,z,f=C.$;r=function(a){return{jssrc:function(a){new C.Ajax({url:a.src+"?update="+Date.now(),oncomplete:function(d){a.result[a.src]=d;a.callback()}})},closurecompiler:function(a){var d="",d="compilation_level=ADVANCED_OPTIMIZATIONS&output_format=text&output_info=compiled_code&&js_code="+a.src;new C.Ajax({url:"http://closure-compiler.appspot.com/compile",type:"POST",query:d,oncomplete:function(d){a.callback(d)}})}}};s=function(a){var b=a.e,d=a.observer,h=a.ajax,e=a.el,
c={requestJS:function(){var a=0,g=0,f=e.srcs.length,k={},l=function(){g--;0===g&&d.fire(b.srcloaded,k)};d.fire(b.srccreatestart,k);for(c.unbind();a<f;a++)e.srcs[a].checked&&(g++,h.jssrc({src:"/cir.js/optimize/"+e.srcs[a].value,result:k,callback:l}))},unbind:function(){e.btn_create.attr("value","request...");return e.btn_create.off(C.e.CLICK,c.requestJS)},bind:function(){e.btn_create.attr("value","Create.");return e.btn_create.on(C.e.CLICK,c.requestJS)}};c.bind();d.on(b.createjssrc,function(){c.bind()});
return c};t=function(a){var b=a.el;a={toggle:function(){var a=0,f=b.srcs.length,e="checked";for(b.check_all[0].checked||(e="");a<f;a++)b.srcs[a].disabled||(b.srcs[a].checked=e)}};b.check_all.on(C.e.CLICK,a.toggle);return a};u=function(a){var b=a.dependency,d,h={checkDependency:function(){var a=f(this).parent().parent(),c="passive",p=b.waste,g;this.checked&&(c="active");(d=b[c][a[0].id])&&h.setDependency(d,this.checked);if(!this.checked)for(g in p){c=!0;for(a=p[g].length;a--;)if(f("#"+p[g][a]+" input")[0].checked){c=
!1;break}c&&(f("#"+g+" input")[0].checked=!1)}},setDependency:function(a,d){for(var b=0,g=a.length;b<g;b++)f("#"+a[b]+" input")[0].checked=d}};a.el.srcs.on(a.e.CHANGE,h.checkDependency);return h};v=C.Event.extend({createjssrc:"a",srccreatestart:"b",srcloaded:"c"});w=function(a){return{check_all:f("#all"),btn_create:f("#create"),srcs:f("#srcfile li input"),srcarea:f("#srcarea")}};x=function(a){return{active:{selector_methods:["selector"],selector_methods_animate:["selector","selector_methods","AnimeFrame",
"Tweener","Animation"],require:["ElementLoad","Observer","Ajax","ScriptLoad"],ExternalInterface:["HashQuery","ExternalInterface_Android","ExternalInterface_IOS"],ExternalInterface_Android:["HashQuery","ExternalInterface"],ExternalInterface_IOS:["HashQuery","ExternalInterface"],Audio:["Embed"],Sound:["Embed","Media","Audio"],Video:["Embed"],Movie:["Embed","Media","Video"],Modal:["Scroll"],Media:["Embed","Audio","Video"],Tweener:["AnimeFrame"],LocalStorage:["WebStorage"],SessionStorage:["WebStorage"],
DeviceMotion:["WindowAction"],DeviceOrientation:["WindowAction"],DeviceShake:["WindowAction","DeviceMotion","DeviceOrientation"],View:["selector","selector_methods"],Model:["selector","Storage","Observer"],Ajax:["Observer"],PreRender:["Observer"],WindowLoad:["Observer"],ScriptLoad:["ElementLoad","Observer"],ImgLoad:["ElementLoad","Observer"],Async:["AbstractTask","Observer"],Sync:["AbstractTask","Observer"],LowPassFilter:["Calc"]},passive:{selector:["selector_methods","selector_methods_animate","View"],
selector_methods:["selector_methods_animate","View"],Ajax:["require"],ScriptLoad:["require"],Storage:["Model"],Observer:"require Ajax PreRender WindowLoad ScriptLoad ImgLoad Model Async Sync".split(" "),HashQuery:["ExternalInterface","ExternalInterface_Android","ExternalInterface_IOS"],ExternalInterface:["ExternalInterface_Android","ExternalInterface_IOS"],Tweener:["selector_methods_animate"],AnimeFrame:["Tweener","selector_methods_animate"],Embed:["Audio","Video","Media","Sound","Movie"],Media:["Audio",
"Video","Sound","Movie"],Scroll:["Modal"],Audio:["Sound"],Video:["Movie"],WebStorage:["LocalStorage","SessionStorage"],WindowAction:["DeviceMotion","DeviceOrientation","DeviceShake"],DeviceMotion:["DeviceShake"],DeviceOrientation:["DeviceShake"],AbstractTask:["Async","Sync"],Calc:["LowPassFilter"]},waste:{ExternalInterface:["ExternalInterface_Android","ExternalInterface_IOS"],Media:["Audio","Video","Sound","Movie"],WindowAction:["DeviceMotion","DeviceOrientation","DeviceShake"],AbstractTask:["Async",
"Sync"],ElementLoad:["ImgLoad","ScriptLoad"]}}};y=function(a){var b=a.e,d=a.observer,h=a.ajax,e=a.el,c={make:function(a){for(var c="",n=0,k=e.srcs.length,l,m="/* optimize: ",q;n<k;n++)l="/cir.js/optimize/"+e.srcs[n].value,a[l]&&(q=f(e.srcs[n]).parent().find(".name"),q.length&&(m+=q.html()+" "),c+=encodeURIComponent(a[l]));m+="*/\n";h.closurecompiler({src:c,callback:function(c){d.fire(b.createjssrc,a["/cir.js/optimize/src/clouser_start.js"]+m+c+a["/cir.js/optimize/src/clouser_end.js"])}});return c}};
d.on(b.srcloaded,function(a){c.make(a)});return c};z=function(a){var b=a.e,d=a.observer,f=a.el,e={setValue:function(a){f.srcarea[0].value=a},loading:function(){e.setValue("Now Create...")}};d.on(b.createjssrc,e.setValue);d.on(b.srccreatestart,e.loading);return e};(function(){var a={observer:new C.Observer,e:new v,el:new w,dependency:new x,ajax:new r};a.makeSrc=new y(a);a.btnCreate=new s(a);a.chkAll=new t(a);a.chkSrc=new u(a);a.srcArea=new z(a);return a})()})();
