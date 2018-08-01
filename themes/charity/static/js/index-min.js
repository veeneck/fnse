function ready(t){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)}function loadPage(){bringElementsIntoView(),initMobileListeners(),initFAQListeners(),initGlideCarousel(),initMapKit()}function initMobileListeners(){document.querySelectorAll(".menu-link")[0].addEventListener("click",function(t){return t.preventDefault(),toggleClass(this,"open"),!1})}function initFAQListeners(){openQuestionIfInUrl();var t=document.querySelectorAll(".question");Array.prototype.forEach.call(t,function(t,e){t.addEventListener("click",function(t){return t.preventDefault(),toggleQuestion(this),!1})})}function openQuestionIfInUrl(){if(window.location.hash){var t=document.querySelectorAll(window.location.hash)[0];hasClass(t,"question")&&toggleQuestion(t)}}function toggleQuestion(t){toggleClass(t,"arrow-right"),toggleClass(t,"arrow-down"),toggleClass(t.parentNode.nextElementSibling,"hide")}function bringElementsIntoView(){checkAllTriggers(),document.addEventListener("scroll",function(t){checkAllTriggers()}),document.addEventListener("resize",function(t){checkAllTriggers()})}function checkAllTriggers(){checkIfTriggerIsInView(document.querySelectorAll(".triggerMe")),checkIfTriggerIsInView(document.querySelectorAll("p"))}function checkIfTriggerIsInView(t){Array.prototype.forEach.call(t,function(t,e){isScrolledIntoView(t)&&addClass(t,"triggeredCSS3")})}function isScrolledIntoView(t){var e=t.getBoundingClientRect(),n=e.top,i=e.bottom;return n<window.innerHeight&&i>=0}function initGlideCarousel(){new Glide(".glide",{type:"slider",startAt:0,perView:3,peek:0,gap:50,breakpoints:{800:{perView:1,peek:{before:50,after:250},gap:20,focusAt:"center"},600:{perView:1,peek:{before:20,after:50},gap:20,swipeThreshold:25}}}).mount()}function toggleClass(t,e){if(t.classList)t.classList.toggle(e);else{var n=t.className.split(" "),i=n.indexOf(e);i>=0?n.splice(i,1):n.push(e),t.className=n.join(" ")}}function addClass(t,e){-1==t.className.split(" ").indexOf(e)&&(t.className+=" "+e)}function hasClass(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function initMapKit(){if(null!=document.getElementById("map")){mapkit.init({authorizationCallback:function(t){t("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhKVDlBRDVOQVkifQ.eyJpc3MiOiJSSzNUOUJZU0o4IiwiaWF0IjoxNTMyMDIxMzgzLCJleHAiOjE1MzAwMDg0NTUxMDZ9.9WOGLjY3F3DnDC_CtQgF-X60-gzWxfNCaen0l14OLM51vGYleOvK2flS0h62PJxJLe97DL3A4Bb66C_QBPSGRA")}});var t=new mapkit.CoordinateRegion(new mapkit.Coordinate(27.796160959738796,-82.6322125086437),new mapkit.CoordinateSpan(.057,.057)),e=new mapkit.Map("map");e.region=t;var n=mapkit.MarkerAnnotation,i=new mapkit.Coordinate(27.8036124,-82.63232749999997),o=new n(i,{color:"#FFFFFF",title:"North Shore Elementary",glyphText:"🏰"});o.size=[100,100],o.selected="true",e.addAnnotation(o);var r=[[27.771179518808168,-82.63216656745908],[27.771046616166533,-82.65481514038083],[27.781127769882147,-82.65487951339719],[27.78116573856317,-82.63856095375058],[27.821095516386848,-82.63856095375058],[27.821209380502705,-82.6205365091705],[27.816783732938067,-82.61612478857091],[27.8060795479485,-82.61556688909582],[27.805201117723303,-82.6099449790006],[27.795444887796346,-82.60492388372472],[27.79244047913533,-82.6073216089855],[27.789858846331658,-82.61204229685171],[27.788416142474595,-82.62217031809195],[27.777450848222355,-82.62651030187658],[27.7774128782445,-82.63007227544836]];r=r.map(function(t){return new mapkit.Coordinate(t[0],t[1])});var s=new mapkit.Style({strokeColor:"#3C70AC",strokeOpacity:1,lineWidth:3,lineJoin:"round",lineDash:[10,10,10,10,10,10]}),u=new mapkit.PolygonOverlay([r],{style:s});e.addOverlay(u)}}ready(loadPage),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Glide=e()}(this,function(){"use strict";function t(t){return parseInt(t)}function e(t){return"string"==typeof t}function n(t){var e=void 0===t?"undefined":v(t);return"function"===e||"object"===e&&!!t}function i(t){return"function"==typeof t}function o(t){return void 0===t}function r(t){return t.constructor===Array}function s(t,e,n){Object.defineProperty(t,e,n)}function u(t,e){var n=w({},t,e);return e.hasOwnProperty("classes")&&(n.classes=w({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=w({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=w({},t.breakpoints,e.breakpoints)),n}function a(){return(new Date).getTime()}function c(t,e,n){var i=void 0,o=void 0,r=void 0,s=void 0,u=0;n||(n={});var c=function(){u=!1===n.leading?0:a(),i=null,s=t.apply(o,r),i||(o=r=null)},l=function(){var l=a();u||!1!==n.leading||(u=l);var f=e-(l-u);return o=this,r=arguments,f<=0||e<f?(i&&(clearTimeout(i),i=null),u=l,s=t.apply(o,r),i||(o=r=null)):i||!1===n.trailing||(i=setTimeout(c,f)),s};return l.cancel=function(){clearTimeout(i),u=0,i=o=r=null},l}function l(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function f(t){return!!(t&&t instanceof window.HTMLElement)}function d(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function h(t,e,o){var r=[function(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(t,e){return{modify:function(i){if(0<=t.settings.focusAt){var o=e.Peek.value;return n(o)?i-o.before:i-o}return i}}},function(t,e){return{modify:function(n){var i=e.Gaps.value,o=e.Sizes.width,r=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===r?n-(o/2-s/2):n-s*r-i*r}}}].concat(t._t,[d]);return{mutate:function(n){for(var s=0;s<r.length;s++){var u=r[s];i(u)&&i(u().modify)&&(n=u(t,e,o).modify(n))}return n}}}function p(t){return n(t)?(e=t,Object.keys(e).sort().reduce(function(t,n){return t[n]=e[n],t[n],t},{})):{};var e}var m={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},b=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.events=e,this.hop=e.hasOwnProperty}return y(t,[{key:"on",value:function(t,e){if(r(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(r(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),t}(),k=function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};g(this,e),this._c={},this._t=[],this._e=new b,this.disabled=!1,this.selector=t,this.settings=u(m,n),this.index=this.settings.startAt}return y(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),n(t)&&(this._c=function(t,e,n){var o={};for(var r in e)i(e[r])&&(o[r]=e[r](t,o,n));for(var s in o)i(o[s].mount)&&o[s].mount();return o}(this,t,this._e)),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return r(t)&&(this._t=t),this}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.settings=u(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){n(t)&&(this._o=t)}},{key:"index",get:function(){return this._i},set:function(e){this._i=t(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),e}(),_={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]},S='[data-glide-el="track"]',T=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.listeners=e}return y(t,[{key:"on",value:function(t,n,i){var o=3<arguments.length&&void 0!==arguments[3]&&arguments[3];e(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=i,n.addEventListener(t[r],this.listeners[t[r]],o)}},{key:"off",value:function(t,n){e(t)&&(t=[t]);for(var i=0;i<t.length;i++)n.removeEventListener(t[i],this.listeners[t[i]],!1)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),x=["ltr","rtl"],C={">":"<","<":">","=":"="},O=["touchstart","mousedown"],H=["touchmove","mousemove"],A=["touchend","touchcancel","mouseup","mouseleave"],M=["mousedown","mousemove","mouseup","mouseleave"],L={Html:function(t,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(S),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(e){return!e.classList.contains(t.settings.classes.cloneSlide)})}};return s(i,"root",{get:function(){return i._r},set:function(t){e(t)&&(t=document.querySelector(t)),f(t)&&(i._r=t)}}),s(i,"track",{get:function(){return i._t},set:function(t){f(t)&&(i._t=t)}}),s(i,"wrapper",{get:function(){return i.track.children[0]}}),i},Translate:function(t,e,n){var i={set:function(n){var i=h(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",function(o){var r=e.Gaps.value,s=e.Sizes.length,u=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(u*(s-1))}),i.set(-u-r*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(0)}),i.set(u*s+r*s)):i.set(o.movement)}),n.on("destroy",function(){i.remove()}),i},Transition:function(t,e,n){var i=!1,o={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return s(o,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){o.set()}),n.on(["build.before","resize","translate.jump"],function(){o.disable()}),n.on("run",function(){o.enable()}),n.on("destroy",function(){o.remove()}),o},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(C[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return s(i,"value",{get:function(){return i._v},set:function(t){-1<x.indexOf(t)&&(i._v=t)}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(e,i,o){var r={mount:function(){this.value=e.settings.peek}};return s(r,"value",{get:function(){return r._v},set:function(e){n(e)?(e.before=t(e.before),e.after=t(e.after)):e=t(e),r._v=e}}),s(r,"reductor",{get:function(){var t=r.value,i=e.settings.perView;return n(t)?t.before/i+t.after/i:2*t/i}}),o.on(["resize","update"],function(){r.mount()}),r},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width=this.slideWidth+"px"},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return s(i,"length",{get:function(){return e.Html.slides.length}}),s(i,"width",{get:function(){return e.Html.root.offsetWidth}}),s(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),s(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),n.on("destroy",function(){i.remove()}),i},Gaps:function(e,n,i){var o={mount:function(){this.value=e.settings.gap},apply:function(t){for(var e=0,i=t.length;e<i;e++){var o=t[e].style,r=n.Direction.value;o[_[r][0]]=0!==e?this.value/2+"px":"",e!==t.length-1?o[_[r][1]]=this.value/2+"px":o[_[r][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return s(o,"value",{get:function(){return o._v},set:function(e){o._v=t(e)}}),s(o,"grow",{get:function(){return o.value*(n.Sizes.length-1)}}),s(o,"reductor",{get:function(){var t=e.settings.perView;return o.value*(t-1)/t}}),i.on("update",function(){o.mount()}),i.on(["build.after","update"],c(function(){o.apply(n.Html.wrapper.children)},30)),i.on("destroy",function(){o.remove(n.Html.wrapper.children)}),o},Move:function(e,n,i){var r={mount:function(){this._o=0},make:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,i.emit("move",{movement:this.value}),n.Transition.after(function(){i.emit("move.after",{movement:t.value})})}};return s(r,"offset",{get:function(){return r._o},set:function(e){r._o=o(e)?0:t(e)}}),s(r,"translate",{get:function(){return n.Sizes.slideWidth*e.index}}),s(r,"value",{get:function(){var t=this.offset,e=this.translate;return n.Direction.is("rtl")?e+t:e-t}}),i.on(["build.before","run"],function(){r.make()}),r},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,o=t.settings,r=o.perView,s=o.classes,u=i.slice(0,r),a=i.slice(-r),c=0;c<Math.max(1,Math.floor(r/i.length));c++){for(var l=0;l<u.length;l++){var f=u[l].cloneNode(!0);f.classList.add(s.cloneSlide),n.push(f)}for(var d=0;d<a.length;d++){var h=a[d].cloneNode(!0);h.classList.add(s.cloneSlide),n.unshift(h)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,o=n.slides,r=Math.floor(t.length/2),s=t.slice(0,r).reverse(),u=t.slice(r,t.length),a=0;a<u.length;a++)i.appendChild(u[a]);for(var c=0;c<s.length;c++)i.insertBefore(s[c],o[0]);for(var l=0;l<t.length;l++)t[l].style.width=e.Sizes.slideWidth+"px"},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return s(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",function(){i.remove(),i.mount(),i.append()}),n.on("build.before",function(){t.isType("carousel")&&i.append()}),n.on("destroy",function(){i.remove()}),i},Resize:function(t,e,n){var i=new T,o={mount:function(){this.bind()},bind:function(){i.on("resize",window,c(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){o.unbind(),i.destroy()}),o},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),l(i).forEach(function(t){t.classList.remove(n.activeSlide)}))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach(function(t){t.classList.remove(n.activeSlide)})}};return n.on(["destroy","update"],function(){i.removeClasses()}),n.on(["resize","update"],function(){i.mount()}),n.on("move.after",function(){i.activeClass()}),i},Run:function(e,n,i){var o={mount:function(){this._o=!1},make:function(t){var o=this;e.disabled||(e.disable(),this.move=t,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),n.Transition.after(function(){(o.isOffset("<")||o.isOffset(">"))&&(o._o=!1,i.emit("run.offset",o.move)),i.emit("run.after",o.move),e.enable()}))},calculate:function(){var n=this.move,o=this.length,r=n.steps,s=n.direction,u="number"==typeof t(r)&&0!==t(r);switch(s){case">":">"===r?e.index=o:this.isEnd()?(e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=0),i.emit("run.end",n)):u?e.index+=Math.min(o-e.index,-t(r)):e.index++;break;case"<":"<"===r?e.index=0:this.isStart()?(e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=o),i.emit("run.start",n)):u?e.index-=Math.min(e.index,t(r)):e.index--;break;case"=":e.index=r}},isStart:function(){return 0===e.index},isEnd:function(){return e.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return s(o,"move",{get:function(){return this._m},set:function(t){this._m={direction:t.substr(0,1),steps:t.substr(1)?t.substr(1):0}}}),s(o,"length",{get:function(){var i=e.settings,o=n.Html.slides.length;return i.perView>o?0:e.isType("slider")&&"center"!==i.focusAt&&i.bound?o-1-(t(i.perView)-1)+t(i.focusAt):o-1}}),s(o,"offset",{get:function(){return this._o}}),o},Swipe:function(e,n,i){var o=new T,r=0,s=0,u=0,a=!1,l={mount:function(){this.bindSwipeStart()},start:function(n){if(!a&&!e.disabled){this.disable();var o=this.touches(n);r=null,s=t(o.pageX),u=t(o.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),i.emit("swipe.start")}},move:function(o){if(!e.disabled){var a=e.settings,c=a.touchAngle,l=a.touchRatio,f=a.classes,d=this.touches(o),h=t(d.pageX)-s,p=t(d.pageY)-u,m=Math.abs(h<<2),v=Math.abs(p<<2),g=(m+v)*(m+v),y=v*v;if(r=Math.asin(y/g),n.Move.make(h*parseFloat(l)),!(180*r/Math.PI<c))return!1;o.stopPropagation(),n.Html.root.classList.add(f.dragging),i.emit("swipe.move")}},end:function(o){if(!e.disabled){var u=e.settings,a=this.touches(o),c=this.threshold(o),l=a.pageX-s,f=180*r/Math.PI,d=Math.round(l/n.Sizes.slideWidth);this.enable(),c<l&&f<u.touchAngle?(u.perTouch&&(d=Math.min(d,t(u.perTouch))),n.Direction.is("rtl")&&(d=-d),n.Run.make(n.Direction.resolve("<"+d))):l<-c&&f<u.touchAngle?(u.perTouch&&(d=Math.max(d,-t(u.perTouch))),n.Direction.is("rtl")&&(d=-d),n.Run.make(n.Direction.resolve(">"+d))):n.Move.make(),n.Html.root.classList.remove(u.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),i.emit("swipe.end")}},bindSwipeStart:function(){var t=this,i=e.settings;i.swipeThreshold&&o.on(O[0],n.Html.wrapper,function(e){t.start(e)},{passive:!0}),i.dragThreshold&&o.on(O[1],n.Html.wrapper,function(e){t.start(e)})},unbindSwipeStart:function(){o.off(O[0],n.Html.wrapper),o.off(O[1],n.Html.wrapper)},bindSwipeMove:function(){var t=this;o.on(H,n.Html.wrapper,c(function(e){t.move(e)},e.settings.throttle),{passive:!0})},unbindSwipeMove:function(){o.off(H,n.Html.wrapper)},bindSwipeEnd:function(){var t=this;o.on(A,n.Html.wrapper,function(e){t.end(e)})},unbindSwipeEnd:function(){o.off(A,n.Html.wrapper)},touches:function(t){return-1<M.indexOf(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(t){var n=e.settings;return-1<M.indexOf(t.type)?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,n.Transition.enable(),this},disable:function(){return a=!0,n.Transition.disable(),this}};return i.on("build.after",function(){n.Html.root.classList.add(e.settings.classes.swipeable)}),i.on("destroy",function(){l.unbindSwipeStart(),l.unbindSwipeMove(),l.unbindSwipeEnd(),o.destroy()}),l},Images:function(t,e,n){var i=new T,o={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){o.unbind(),i.destroy()}),o},Anchors:function(t,e,n){var i=new T,o=!1,r=!1,u={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){t.stopPropagation(),r&&t.preventDefault()},detach:function(){if(r=!0,!o){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");o=!0}return this},attach:function(){if(r=!1,o){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));o=!1}return this}};return s(u,"items",{get:function(){return u._a}}),n.on("swipe.move",function(){u.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){u.attach()})}),n.on("destroy",function(){u.attach(),u.unbind(),i.destroy()}),u},Controls:function(t,e,n){var i=new T,o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i.classList.add(n.classes.activeNav),l(i).forEach(function(t){t.classList.remove(n.classes.activeNav)})},removeClass:function(e){e[t.index].classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on(["click","touchstart"],t[e],this.click)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return s(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],function(){o.setActive()}),n.on("destroy",function(){o.removeBindings(),o.removeActive(),i.destroy()}),o},Keyboard:function(t,e,n){var i=new T,o={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){o.unbind()}),n.on("update",function(){o.mount()}),n.on("destroy",function(){i.destroy()}),o},Autoplay:function(e,n,i){var r=new T,u={mount:function(){this.start(),e.settings.hoverpause&&this.bind()},start:function(){var t=this;e.settings.autoplay&&o(this._i)&&(this._i=setInterval(function(){t.stop(),n.Run.make(">"),t.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;r.on("mouseover",n.Html.root,function(){t.stop()}),r.on("mouseout",n.Html.root,function(){t.start()})},unbind:function(){r.off(["mouseover","mouseout"],n.Html.root)}};return s(u,"time",{get:function(){return t(n.Html.slides[e.index].getAttribute("data-glide-autoplay")||e.settings.autoplay)}}),i.on(["destroy","update"],function(){u.unbind()}),i.on(["run.before","pause","destroy","swipe.start","update"],function(){u.stop()}),i.on(["run.after","play","swipe.end"],function(){u.start()}),i.on("update",function(){u.mount()}),i.on("destroy",function(){r.destroy()}),u},Breakpoints:function(t,e,n){var i=new T,o=t.settings,r=p(o.breakpoints),s=w({},o),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return w(o,a.match(r)),i.on("resize",window,c(function(){t.settings=u(o,a.match(r))},t.settings.throttle)),n.on("update",function(){r=p(r),s=w({},o)}),n.on("destroy",function(){i.off("resize",window)}),a}};return function(t){function e(){return g(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,k),y(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,w({},L,t))}}]),e}()}),function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,i){n=n||999,i||0===i||(i=9);var o,r=function(t){o=t},s=function(){clearTimeout(o),r(0)},u=function(t){return Math.max(0,e.getTopOf(t)-i)},a=function(i,o,u){if(s(),0===o||o&&o<0||t(e.body))e.toY(i),u&&u();else{var a=e.getY(),c=Math.max(0,i)-a,l=(new Date).getTime();o=o||Math.min(Math.abs(c),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-l)/o),i=Math.max(0,Math.floor(a+c*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(i),n<1&&e.getHeight()+i<e.body.scrollHeight?t():(setTimeout(s,99),u&&u())},9))}()}},c=function(t,e,n){a(u(t),e,n)},l=function(t,n,o){var r=t.getBoundingClientRect().height,s=e.getTopOf(t)+r,l=e.getHeight(),f=e.getY(),d=f+l;u(t)<f||r+i>l?c(t,n,o):s+i>d?a(s-l+i,n,o):o&&o()},f=function(t,n,i,o){a(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(i||t.getBoundingClientRect().height/2)),n,o)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(i=e),{defaultDuration:n,edgeOffset:i}},to:c,toY:a,intoView:l,center:f,stop:s,moving:function(){return!!o},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,i=function(){return window.scrollY||n.scrollTop},o=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:i,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+i()-n.offsetTop}});if(o.createScroller=function(t,i,o){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},i,o)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="history"in window&&"pushState"in history,s=r&&"scrollRestoration"in history;s&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){s&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&o.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=o.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,o.getTopOf(e)-t),i=o.getY()-n;0<=i&&i<9&&window.scrollTo(0,n)}}},9)},!1);var u=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(s){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=o.getY();try{history.replaceState(n,"")}catch(t){}}var i=e.getAttribute("href")||"";if(0===i.indexOf("#")&&!u.test(e.className)){var a=0,c=document.getElementById(i.substring(1));if("#"!==i){if(!c)return;a=o.getTopOf(c)}t.preventDefault();var l=function(){window.location=i},f=o.setup().edgeOffset;f&&(a=Math.max(0,a-f),r&&(l=function(){history.pushState({},"",i)})),o.toY(a,null,l)}}},!1)}return o});