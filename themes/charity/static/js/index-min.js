function ready(t){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)}function loadPage(){objectFitFallback(),initLazyLoad(),bringElementsIntoView(),initMobileListeners(),initFAQListeners(),initGlideCarousel()}function objectFitFallback(){if(!Modernizr.objectfit){var t=document.querySelectorAll(".image-container");Array.prototype.forEach.call(t,function(t,e){var n=getFirstChild(t).getAttribute("data-src");t.style.backgroundImage="url('"+n+"')",addClass(t,"compat-object-fit")})}}function initMobileListeners(){var t=document.getElementById("menu");document.querySelectorAll(".menu-link")[0].addEventListener("click",function(e){return e.preventDefault(),toggleClass(this,"open"),toggleClass(t,"open"),!1})}function initFAQListeners(){openQuestionIfInUrl();var t=document.querySelectorAll(".question");Array.prototype.forEach.call(t,function(t,e){t.addEventListener("click",function(t){return t.preventDefault(),toggleQuestion(this),!1})})}function openQuestionIfInUrl(){if(window.location.hash){var t=document.querySelectorAll(window.location.hash)[0];hasClass(t,"question")&&toggleQuestion(t)}}function toggleQuestion(t){toggleClass(t,"arrow-right"),toggleClass(t,"arrow-down"),toggleClass(t.parentNode.nextElementSibling,"hide")}function bringElementsIntoView(){checkAllTriggers(),document.body.addEventListener("scroll",function(t){checkAllTriggers()}),document.addEventListener("resize",function(t){checkAllTriggers()})}function checkAllTriggers(){checkIfTriggerIsInView(document.querySelectorAll(".triggerMe")),checkIfTriggerIsInView(document.querySelectorAll("p")),checkIfTriggerIsInView(document.querySelectorAll("#map"))}function checkIfTriggerIsInView(t){Array.prototype.forEach.call(t,function(t,e){var n=0;"map"!=t.id||hasClass(t,"loaded")?hasClass(t,"triggeredCSS3")||isScrolledIntoView(t,n)&&addClass(t,"triggeredCSS3"):(n=500,isScrolledIntoView(t,n)&&(addClass(t,"loaded"),loadMapKit()))})}function isScrolledIntoView(t,e){var n=t.getBoundingClientRect(),i=n.top,r=n.bottom;return i<window.innerHeight+e&&r>=0}function initGlideCarousel(){document.getElementsByClassName("glide").length>0&&new Glide(".glide",{type:"slider",startAt:0,perView:3,peek:0,gap:50,breakpoints:{800:{perView:1,peek:{before:50,after:250},gap:20,focusAt:"center"},600:{perView:1,peek:{before:20,after:50},gap:20,swipeThreshold:25}}}).mount()}function toggleClass(t,e){if(t.classList)t.classList.toggle(e);else{var n=t.className.split(" "),i=n.indexOf(e);i>=0?n.splice(i,1):n.push(e),t.className=n.join(" ")}}function addClass(t,e){-1==t.className.split(" ").indexOf(e)&&(t.className+=" "+e)}function hasClass(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function loadScript(t,e){var n=document.createElement("script");n.onload=function(){e&&e()},n.src=t,document.getElementsByTagName("head")[0].appendChild(n)}function getFirstChild(t){for(var e=t.firstChild;null!=e&&3==e.nodeType;)e=e.nextSibling;return e}function initMapKit(){if(null!=document.getElementById("map")){mapkit.init({authorizationCallback:function(t){t("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhKVDlBRDVOQVkifQ.eyJpc3MiOiJSSzNUOUJZU0o4IiwiaWF0IjoxNTMyMDIxMzgzLCJleHAiOjE1MzAwMDg0NTUxMDZ9.9WOGLjY3F3DnDC_CtQgF-X60-gzWxfNCaen0l14OLM51vGYleOvK2flS0h62PJxJLe97DL3A4Bb66C_QBPSGRA")}});var t=new mapkit.CoordinateRegion(new mapkit.Coordinate(27.796160959738796,-82.6322125086437),new mapkit.CoordinateSpan(.057,.057)),e=new mapkit.Map("map");e.region=t;var n=mapkit.MarkerAnnotation,i=new mapkit.Coordinate(27.8036124,-82.63232749999997),r=new n(i,{color:"#FFFFFF",title:"North Shore Elementary",glyphText:"🏰"});r.selected="true",e.addAnnotation(r);var o=[[27.771179518808168,-82.63216656745908],[27.771046616166533,-82.65481514038083],[27.781127769882147,-82.65487951339719],[27.78116573856317,-82.63856095375058],[27.821095516386848,-82.63856095375058],[27.821209380502705,-82.6205365091705],[27.816783732938067,-82.61612478857091],[27.8060795479485,-82.61556688909582],[27.805201117723303,-82.6099449790006],[27.795444887796346,-82.60492388372472],[27.79244047913533,-82.6073216089855],[27.789858846331658,-82.61204229685171],[27.788416142474595,-82.62217031809195],[27.777450848222355,-82.62651030187658],[27.7774128782445,-82.63007227544836]];o=o.map(function(t){return new mapkit.Coordinate(t[0],t[1])});var s=new mapkit.Style({strokeColor:"#3C70AC",strokeOpacity:1,lineWidth:3,lineJoin:"round",lineDash:[10,10,10,10,10,10]}),a=new mapkit.PolygonOverlay([o],{style:s});e.addOverlay(a)}}function loadMapKit(){loadScript("https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js",function(){initMapKit()})}function initLazyLoad(){!function(t,e){var n=e.getElementsByTagName("body")[0],i=e.createElement("script");i.async=!0;var r="IntersectionObserver"in t?"10.12.0":"8.12.0";i.src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/"+r+"/lazyload.min.js",t.lazyLoadOptions={elements_selector:".lazy",container:document.body},n.appendChild(i)}(window,document)}function debugImages(){document.querySelectorAll("img").forEach(function(t){responsiveImageDebugOutput(t)})}function responsiveImageDebugOutput(img){if(!img)throw new TypeError("Expected an image node. Got none.");if(arguments.length>1)return void addToAllElements([].slice.apply(arguments));var evalPrint=function(arg1,arg2,argN){for(var len=arguments.length,s="";len--;){var arg=arguments[len],val=eval(arg);val&&(s+="["+arg+"="+val+"]  ")}console.log(s)},listener=function(){evalPrint(void 0===img.currentSrc?"img.src":"img.currentSrc"),evalPrint("img.id"),evalPrint("img.width","img.height"),evalPrint("img.naturalWidth","img.naturalHeight"),evalPrint("window.devicePixelRatio");var t=img.naturalWidth*window.devicePixelRatio,e=img.naturalHeight*window.devicePixelRatio;console.log("Resolution: "+t+"x"+e)};img.complete&&listener(),img.addEventListener("load",listener)}ready(loadPage),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Glide=e()}(this,function(){"use strict";function t(t){return parseInt(t)}function e(t){return"string"==typeof t}function n(t){var e=void 0===t?"undefined":v(t);return"function"===e||"object"===e&&!!t}function i(t){return"function"==typeof t}function r(t){return void 0===t}function o(t){return t.constructor===Array}function s(t,e,n){Object.defineProperty(t,e,n)}function a(t,e){var n=b({},t,e);return e.hasOwnProperty("classes")&&(n.classes=b({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=b({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=b({},t.breakpoints,e.breakpoints)),n}function u(){return(new Date).getTime()}function l(t,e,n){var i=void 0,r=void 0,o=void 0,s=void 0,a=0;n||(n={});var l=function(){a=!1===n.leading?0:u(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=u();a||!1!==n.leading||(a=c);var f=e-(c-a);return r=this,o=arguments,f<=0||e<f?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(l,f)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}function c(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function f(t){return!!(t&&t instanceof window.HTMLElement)}function d(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function p(t,e,r){var o=[function(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(t,e){return{modify:function(i){if(0<=t.settings.focusAt){var r=e.Peek.value;return n(r)?i-r.before:i-r}return i}}},function(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}].concat(t._t,[d]);return{mutate:function(n){for(var s=0;s<o.length;s++){var a=o[s];i(a)&&i(a().modify)&&(n=a(t,e,r).modify(n))}return n}}}function h(t){return n(t)?(e=t,Object.keys(e).sort().reduce(function(t,n){return t[n]=e[n],t[n],t},{})):{};var e}var m={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.events=e,this.hop=e.hasOwnProperty}return y(t,[{key:"on",value:function(t,e){if(o(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(o(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),t}(),k=function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};g(this,e),this._c={},this._t=[],this._e=new w,this.disabled=!1,this.selector=t,this.settings=a(m,n),this.index=this.settings.startAt}return y(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),n(t)&&(this._c=function(t,e,n){var r={};for(var o in e)i(e[o])&&(r[o]=e[o](t,r,n));for(var s in r)i(r[s].mount)&&r[s].mount();return r}(this,t,this._e)),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return o(t)&&(this._t=t),this}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.settings=a(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){n(t)&&(this._o=t)}},{key:"index",get:function(){return this._i},set:function(e){this._i=t(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),e}(),S={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]},_='[data-glide-el="track"]',C=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.listeners=e}return y(t,[{key:"on",value:function(t,n,i){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];e(t)&&(t=[t]);for(var o=0;o<t.length;o++)this.listeners[t[o]]=i,n.addEventListener(t[o],this.listeners[t[o]],r)}},{key:"off",value:function(t,n){e(t)&&(t=[t]);for(var i=0;i<t.length;i++)n.removeEventListener(t[i],this.listeners[t[i]],!1)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),x=["ltr","rtl"],T={">":"<","<":">","=":"="},A=["touchstart","mousedown"],O=["touchmove","mousemove"],L=["touchend","touchcancel","mouseup","mouseleave"],E=["mousedown","mousemove","mouseup","mouseleave"],H={Html:function(t,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(_),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(e){return!e.classList.contains(t.settings.classes.cloneSlide)})}};return s(i,"root",{get:function(){return i._r},set:function(t){e(t)&&(t=document.querySelector(t)),f(t)&&(i._r=t)}}),s(i,"track",{get:function(){return i._t},set:function(t){f(t)&&(i._t=t)}}),s(i,"wrapper",{get:function(){return i.track.children[0]}}),i},Translate:function(t,e,n){var i={set:function(n){var i=p(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",function(r){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(a*(s-1))}),i.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(0)}),i.set(a*s+o*s)):i.set(r.movement)}),n.on("destroy",function(){i.remove()}),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return s(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){r.set()}),n.on(["build.before","resize","translate.jump"],function(){r.disable()}),n.on("run",function(){r.enable()}),n.on("destroy",function(){r.remove()}),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(T[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return s(i,"value",{get:function(){return i._v},set:function(t){-1<x.indexOf(t)&&(i._v=t)}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(e,i,r){var o={mount:function(){this.value=e.settings.peek}};return s(o,"value",{get:function(){return o._v},set:function(e){n(e)?(e.before=t(e.before),e.after=t(e.after)):e=t(e),o._v=e}}),s(o,"reductor",{get:function(){var t=o.value,i=e.settings.perView;return n(t)?t.before/i+t.after/i:2*t/i}}),r.on(["resize","update"],function(){o.mount()}),o},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width=this.slideWidth+"px"},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return s(i,"length",{get:function(){return e.Html.slides.length}}),s(i,"width",{get:function(){return e.Html.root.offsetWidth}}),s(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),s(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),n.on("destroy",function(){i.remove()}),i},Gaps:function(e,n,i){var r={mount:function(){this.value=e.settings.gap},apply:function(t){for(var e=0,i=t.length;e<i;e++){var r=t[e].style,o=n.Direction.value;r[S[o][0]]=0!==e?this.value/2+"px":"",e!==t.length-1?r[S[o][1]]=this.value/2+"px":r[S[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return s(r,"value",{get:function(){return r._v},set:function(e){r._v=t(e)}}),s(r,"grow",{get:function(){return r.value*(n.Sizes.length-1)}}),s(r,"reductor",{get:function(){var t=e.settings.perView;return r.value*(t-1)/t}}),i.on("update",function(){r.mount()}),i.on(["build.after","update"],l(function(){r.apply(n.Html.wrapper.children)},30)),i.on("destroy",function(){r.remove(n.Html.wrapper.children)}),r},Move:function(e,n,i){var o={mount:function(){this._o=0},make:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,i.emit("move",{movement:this.value}),n.Transition.after(function(){i.emit("move.after",{movement:t.value})})}};return s(o,"offset",{get:function(){return o._o},set:function(e){o._o=r(e)?0:t(e)}}),s(o,"translate",{get:function(){return n.Sizes.slideWidth*e.index}}),s(o,"value",{get:function(){var t=this.offset,e=this.translate;return n.Direction.is("rtl")?e+t:e-t}}),i.on(["build.before","run"],function(){o.make()}),o},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=i.slice(0,o),u=i.slice(-o),l=0;l<Math.max(1,Math.floor(o/i.length));l++){for(var c=0;c<a.length;c++){var f=a[c].cloneNode(!0);f.classList.add(s.cloneSlide),n.push(f)}for(var d=0;d<u.length;d++){var p=u[d].cloneNode(!0);p.classList.add(s.cloneSlide),n.unshift(p)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),u=0;u<a.length;u++)i.appendChild(a[u]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var c=0;c<t.length;c++)t[c].style.width=e.Sizes.slideWidth+"px"},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return s(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",function(){i.remove(),i.mount(),i.append()}),n.on("build.before",function(){t.isType("carousel")&&i.append()}),n.on("destroy",function(){i.remove()}),i},Resize:function(t,e,n){var i=new C,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,l(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),c(i).forEach(function(t){t.classList.remove(n.activeSlide)}))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach(function(t){t.classList.remove(n.activeSlide)})}};return n.on(["destroy","update"],function(){i.removeClasses()}),n.on(["resize","update"],function(){i.mount()}),n.on("move.after",function(){i.activeClass()}),i},Run:function(e,n,i){var r={mount:function(){this._o=!1},make:function(t){var r=this;e.disabled||(e.disable(),this.move=t,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),n.Transition.after(function(){(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,i.emit("run.offset",r.move)),i.emit("run.after",r.move),e.enable()}))},calculate:function(){var n=this.move,r=this.length,o=n.steps,s=n.direction,a="number"==typeof t(o)&&0!==t(o);switch(s){case">":">"===o?e.index=r:this.isEnd()?(e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=0),i.emit("run.end",n)):a?e.index+=Math.min(r-e.index,-t(o)):e.index++;break;case"<":"<"===o?e.index=0:this.isStart()?(e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=r),i.emit("run.start",n)):a?e.index-=Math.min(e.index,t(o)):e.index--;break;case"=":e.index=o}},isStart:function(){return 0===e.index},isEnd:function(){return e.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return s(r,"move",{get:function(){return this._m},set:function(t){this._m={direction:t.substr(0,1),steps:t.substr(1)?t.substr(1):0}}}),s(r,"length",{get:function(){var i=e.settings,r=n.Html.slides.length;return i.perView>r?0:e.isType("slider")&&"center"!==i.focusAt&&i.bound?r-1-(t(i.perView)-1)+t(i.focusAt):r-1}}),s(r,"offset",{get:function(){return this._o}}),r},Swipe:function(e,n,i){var r=new C,o=0,s=0,a=0,u=!1,c={mount:function(){this.bindSwipeStart()},start:function(n){if(!u&&!e.disabled){this.disable();var r=this.touches(n);o=null,s=t(r.pageX),a=t(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),i.emit("swipe.start")}},move:function(r){if(!e.disabled){var u=e.settings,l=u.touchAngle,c=u.touchRatio,f=u.classes,d=this.touches(r),p=t(d.pageX)-s,h=t(d.pageY)-a,m=Math.abs(p<<2),v=Math.abs(h<<2),g=(m+v)*(m+v),y=v*v;if(o=Math.asin(y/g),n.Move.make(p*parseFloat(c)),!(180*o/Math.PI<l))return!1;r.stopPropagation(),n.Html.root.classList.add(f.dragging),i.emit("swipe.move")}},end:function(r){if(!e.disabled){var a=e.settings,u=this.touches(r),l=this.threshold(r),c=u.pageX-s,f=180*o/Math.PI,d=Math.round(c/n.Sizes.slideWidth);this.enable(),l<c&&f<a.touchAngle?(a.perTouch&&(d=Math.min(d,t(a.perTouch))),n.Direction.is("rtl")&&(d=-d),n.Run.make(n.Direction.resolve("<"+d))):c<-l&&f<a.touchAngle?(a.perTouch&&(d=Math.max(d,-t(a.perTouch))),n.Direction.is("rtl")&&(d=-d),n.Run.make(n.Direction.resolve(">"+d))):n.Move.make(),n.Html.root.classList.remove(a.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),i.emit("swipe.end")}},bindSwipeStart:function(){var t=this,i=e.settings;i.swipeThreshold&&r.on(A[0],n.Html.wrapper,function(e){t.start(e)},{passive:!0}),i.dragThreshold&&r.on(A[1],n.Html.wrapper,function(e){t.start(e)})},unbindSwipeStart:function(){r.off(A[0],n.Html.wrapper),r.off(A[1],n.Html.wrapper)},bindSwipeMove:function(){var t=this;r.on(O,n.Html.wrapper,l(function(e){t.move(e)},e.settings.throttle),{passive:!0})},unbindSwipeMove:function(){r.off(O,n.Html.wrapper)},bindSwipeEnd:function(){var t=this;r.on(L,n.Html.wrapper,function(e){t.end(e)})},unbindSwipeEnd:function(){r.off(L,n.Html.wrapper)},touches:function(t){return-1<E.indexOf(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(t){var n=e.settings;return-1<E.indexOf(t.type)?n.dragThreshold:n.swipeThreshold},enable:function(){return u=!1,n.Transition.enable(),this},disable:function(){return u=!0,n.Transition.disable(),this}};return i.on("build.after",function(){n.Html.root.classList.add(e.settings.classes.swipeable)}),i.on("destroy",function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),r.destroy()}),c},Images:function(t,e,n){var i=new C,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Anchors:function(t,e,n){var i=new C,r=!1,o=!1,a={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){t.stopPropagation(),o&&t.preventDefault()},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return s(a,"items",{get:function(){return a._a}}),n.on("swipe.move",function(){a.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){a.attach()})}),n.on("destroy",function(){a.attach(),a.unbind(),i.destroy()}),a},Controls:function(t,e,n){var i=new C,r={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i.classList.add(n.classes.activeNav),c(i).forEach(function(t){t.classList.remove(n.classes.activeNav)})},removeClass:function(e){e[t.index].classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on(["click","touchstart"],t[e],this.click)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return s(r,"items",{get:function(){return r._c}}),n.on(["mount.after","move.after"],function(){r.setActive()}),n.on("destroy",function(){r.removeBindings(),r.removeActive(),i.destroy()}),r},Keyboard:function(t,e,n){var i=new C,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){r.unbind()}),n.on("update",function(){r.mount()}),n.on("destroy",function(){i.destroy()}),r},Autoplay:function(e,n,i){var o=new C,a={mount:function(){this.start(),e.settings.hoverpause&&this.bind()},start:function(){var t=this;e.settings.autoplay&&r(this._i)&&(this._i=setInterval(function(){t.stop(),n.Run.make(">"),t.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;o.on("mouseover",n.Html.root,function(){t.stop()}),o.on("mouseout",n.Html.root,function(){t.start()})},unbind:function(){o.off(["mouseover","mouseout"],n.Html.root)}};return s(a,"time",{get:function(){return t(n.Html.slides[e.index].getAttribute("data-glide-autoplay")||e.settings.autoplay)}}),i.on(["destroy","update"],function(){a.unbind()}),i.on(["run.before","pause","destroy","swipe.start","update"],function(){a.stop()}),i.on(["run.after","play","swipe.end"],function(){a.start()}),i.on("update",function(){a.mount()}),i.on("destroy",function(){o.destroy()}),a},Breakpoints:function(t,e,n){var i=new C,r=t.settings,o=h(r.breakpoints),s=b({},r),u={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return b(r,u.match(o)),i.on("resize",window,l(function(){t.settings=a(r,u.match(o))},t.settings.throttle)),n.on("update",function(){o=h(o),s=b({},r)}),n.on("destroy",function(){i.off("resize",window)}),u}};return function(t){function e(){return g(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,k),y(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,b({},H,t))}}]),e}()}),function(t,e,n){function i(t,e){return typeof t===e}function r(){var t,e,n,r,o,s,a;for(var u in g)if(g.hasOwnProperty(u)){if(t=[],e=g[u],e.name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(r=i(e.fn,"function")?e.fn():e.fn,o=0;o<t.length;o++)s=t[o],a=s.split("."),1===a.length?b[a[0]]=r:(!b[a[0]]||b[a[0]]instanceof Boolean||(b[a[0]]=new Boolean(b[a[0]])),b[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}function o(t){return t.replace(/([a-z])-([a-z])/g,function(t,e,n){return e+n.toUpperCase()}).replace(/^-/,"")}function s(t,e){return!!~(""+t).indexOf(e)}function a(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):T?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function u(t,e){return function(){return t.apply(e,arguments)}}function l(t,e,n){var r;for(var o in t)if(t[o]in e)return!1===n?t[o]:(r=e[t[o]],i(r,"function")?u(r,n||e):r);return!1}function c(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(e,n,i){var r;if("getComputedStyle"in t){r=getComputedStyle.call(t,e,n);var o=t.console;if(null!==r)i&&(r=r.getPropertyValue(i));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&e.currentStyle&&e.currentStyle[i];return r}function d(){var t=e.body;return t||(t=a(T?"svg":"body"),t.fake=!0),t}function p(t,n,i,r){var o="modernizr",s,u,l,c,f=a("div"),p=d();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=r?r[i]:o+(i+1),f.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+o,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(e.createTextNode(t)),f.id=o,p.fake&&(p.style.background="",p.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),u=n(f,t),p.fake?(p.parentNode.removeChild(p),x.style.overflow=c,x.offsetHeight):f.parentNode.removeChild(f),!!u}function h(e,i){var r=e.length;if("CSS"in t&&"supports"in t.CSS){for(;r--;)if(t.CSS.supports(c(e[r]),i))return!0;return!1}if("CSSSupportsRule"in t){for(var o=[];r--;)o.push("("+c(e[r])+":"+i+")");return o=o.join(" or "),p("@supports ("+o+") { #modernizr { position: absolute; } }",function(t){return"absolute"==f(t,null,"position")})}return n}function m(t,e,r,u){function l(){f&&(delete O.style,delete O.modElem)}if(u=!i(u,"undefined")&&u,!i(r,"undefined")){var c=h(t,r);if(!i(c,"undefined"))return c}for(var f,d,p,m,v,g=["modernizr","tspan","samp"];!O.style&&g.length;)f=!0,O.modElem=a(g.shift()),O.style=O.modElem.style;for(p=t.length,d=0;d<p;d++)if(m=t[d],v=O.style[m],s(m,"-")&&(m=o(m)),O.style[m]!==n){if(u||i(r,"undefined"))return l(),"pfx"!=e||m;try{O.style[m]=r}catch(t){}if(O.style[m]!=v)return l(),"pfx"!=e||m}return l(),!1}function v(t,e,n,r,o){
var s=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+S.join(s+" ")+s).split(" ");return i(e,"string")||i(e,"undefined")?m(a,e,r,o):(a=(t+" "+C.join(s+" ")+s).split(" "),l(a,e,n))}var g=[],y={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout(function(){e(n[t])},0)},addTest:function(t,e,n){g.push({name:t,fn:e,options:n})},addAsyncTest:function(t){g.push({name:null,fn:t})}},b=function(){};b.prototype=y,b=new b;var w=[],k="Moz O ms Webkit",S=y._config.usePrefixes?k.split(" "):[];y._cssomPrefixes=S;var _=function(e){var i=prefixes.length,r=t.CSSRule,o;if(void 0===r)return n;if(!e)return!1;if(e=e.replace(/^@/,""),(o=e.replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var s=0;s<i;s++){var a=prefixes[s];if(a.toUpperCase()+"_"+o in r)return"@-"+a.toLowerCase()+"-"+e}return!1};y.atRule=_;var C=y._config.usePrefixes?k.toLowerCase().split(" "):[];y._domPrefixes=C;var x=e.documentElement,T="svg"===x.nodeName.toLowerCase(),A={elem:a("modernizr")};b._q.push(function(){delete A.elem});var O={style:A.elem.style};b._q.unshift(function(){delete O.style}),y.testAllProps=v;var L=y.prefixed=function(t,e,n){return 0===t.indexOf("@")?_(t):(-1!=t.indexOf("-")&&(t=o(t)),e?v(t,e,n):v(t,"pfx"))};b.addTest("objectfit",!!L("objectFit"),{aliases:["object-fit"]}),r(),delete y.addTest,delete y.addAsyncTest;for(var E=0;E<b._q.length;E++)b._q[E]();t.Modernizr=b}(window,document);