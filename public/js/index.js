// @codekit-prepend "modernizer.js";
// @codekit-prepend "glide.js";
// @codekit-prepend "zenscroll.js";

/* -------- DOCUMENT READY -------- */

ready(loadPage);

/// We're using window load instead of DomContentLoaded so that the CSS animations play as expected.
/// If the stylesheet isn't cached, sometimes the JS will trigger before the CSS loads, and some elements are hidden
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    window.addEventListener('load', fn);
  }
}

function loadPage() {
	objectFitFallback();
	initLazyLoad();
	bringElementsIntoView();
	initMobileListeners();
	initFAQListeners();
	initGlideCarousel();
	//debugImages();
	///debugOverFlow();
}

/* -------- OBJECT FIT FALLBACK -------- */

function objectFitFallback() {
	if (!Modernizr.objectfit) {
		var images = document.querySelectorAll(".image-container");
		Array.prototype.forEach.call(images, function(imageContainer, i){
			var src = getFirstChild(imageContainer).getAttribute("data-src");
			imageContainer.style.backgroundImage = "url('"+src+"')";
			addClass(imageContainer, 'compat-object-fit');
		});
	}
}


/* -------- MOBILE MENU -------- */

/// Toggle a classname whenever the hamburger menu is clicked to open and close the element.
function initMobileListeners() {
	var $menu = document.getElementById("menu");
    var $menulink = document.querySelectorAll('.menu-link')[0];
    var header = document.getElementsByTagName("header")[0];
  
	$menulink.addEventListener("click", function(event) {
	  event.preventDefault();

	  /// Set the hamburger icon to open
	  toggleClass(this, 'open');

	  /// The animations reverse each other. So open and closed are always toggled.
	  toggleClass($menu, 'closed');

	  /// Set the drop down menu to open
	  addClass($menu, "open");

	  /// On load, we don't want animations to play. This class prevents them, and is removed on first click.
	  if(hasClass($menu, "firstView")) {
	  	removeClass($menu, 'firstView');
	  }

	  // To make it look like the border moves, toggle noborder  with the above.
	  /// On open, there is no delay. On close, it has to wait until the close animation finishes.
	  if(hasClass($menu, 'closed')) {
		  setTimeout(function() {
	  		removeClass(header, 'noborder');
		  }, 300);
	  }
	  else {
	  	addClass(header, 'noborder');
	  }

	  return false;
	});
}

/* -------- FAQ QUESTIONS -------- */

/// Attach events to questions, and perform any code needed on load.
function initFAQListeners() {
	openQuestionIfInUrl();
	var questions = document.querySelectorAll('.question');
	Array.prototype.forEach.call(questions, function(question, i){
		question.addEventListener('click', function(event) {
			event.preventDefault();
			toggleQuestion(this)
			return false;
		});
	});
}

/// If the URL has a hash (#) of the question ID, open that question immediately.
function openQuestionIfInUrl() {
	if(window.location.hash) {
  		var el = document.querySelectorAll(window.location.hash)[0];
  		if(hasClass(el, "question")) {
  			toggleQuestion(el);
  		}
  	}
}

/// Open and close the questions by toggling the class name.
function toggleQuestion(element) {
	toggleClass(element, "arrow-right");
	toggleClass(element, "arrow-down");
	toggleClass(element.parentNode.nextElementSibling, "hide");
}

/* -------- ELEMENTS SCROLL INTO VIEW -------------*/
 
/// Check once on initial call for elements alreayd in view, and then the scroll / resize event will check the rest.
function bringElementsIntoView() {
	checkAllTriggers();
	document.addEventListener('scroll', function(event) {
		checkAllTriggers();
	});
	document.addEventListener('resize', function(event) {
		checkAllTriggers();
	});
}

/// List of all things that we may want to check for inView animations
function checkAllTriggers() {
	checkIfTriggerIsInView(document.querySelectorAll('.triggerMe'));
	checkIfTriggerIsInView(document.querySelectorAll('p'));
	checkIfTriggerIsInView(document.querySelectorAll('#map'));
}

/// Loop through a node list and see if each element is in view. If so, add triggeredCSS3, which is the class used to animate.
function checkIfTriggerIsInView(nodes) {
	Array.prototype.forEach.call(nodes, function(trigger, i){
		var leading = 0;

		/// For the map, set a leading so that it preloads in advance.
		if(trigger.id == "map" && !hasClass(trigger, "loaded")) {
			leading = 500;
			if(isScrolledIntoView(trigger, leading)) {
				addClass(trigger, "loaded");
				loadMapKit();
			}
		}

		/// For everything else, add a classname if it isn't already present
		else {
			if(!hasClass(trigger, "triggeredCSS3")) {
				if(isScrolledIntoView(trigger, leading)) {
					addClass(trigger, "triggeredCSS3");
				}
			}
		}
	});
}

/// Utility function to check if an element is in view.
function isScrolledIntoView(el, leading) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    ///var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < (window.innerHeight + leading) && elemBottom >= 0;
    return isVisible;
}

/* -------- GLIDE JS FOR CAROUSEL -------- */

/// Documentation and implementation here: https://glidejs.com/docs/setup/
function initGlideCarousel() {
	var glider = document.getElementsByClassName("glide");
	if(glider.length > 0) {
		new Glide('.glide', {
	 		type: 'slider',
	  		startAt: 0,
	  		perView: 3,
	  		peek: 0,
	  		gap: 50,
	  		peek: { before: 50, after: 50 },
	  		breakpoints: {
	  		1200: {
		      perView: 2,
		      peek: { before: 40, after: 40 },
		      gap: 40,
		    },
		    800: {
		      perView: 1,
		      peek: { before: 50, after: 200 },
		      gap: 50,
		      focusAt: 'center'
		    },
		    600: {
		      perView: 1,
		      peek: { before: 20, after: 50 },
		      gap: 20,
		      swipeThreshold: 25
		    }
		  }
		}).mount();
	}
}

/* -------- UTILITY -------- */

function toggleClass(el, className) {
	if (el.classList) {
  		el.classList.toggle(className);
	} else {
	var classes = el.className.split(' ');
	var existingIndex = classes.indexOf(className);

	if (existingIndex >= 0)
	    classes.splice(existingIndex, 1);
	else
	    classes.push(className);
		el.className = classes.join(' ');
	}
}

function addClass(el, className) {
    var arr = el.className.split(" ");
    if (arr.indexOf(className) == -1) {
        el.className += " " + className;
    }
}

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}


function loadScript(url,callback){
    var script = document.createElement('script');
 
    script.onload = function(){
        //once the script is loaded, run the callback
        if (callback){callback()};
    };
 
    //create the script and add it to the DOM
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};

function getFirstChild(el){
  var firstChild = el.firstChild;
  while(firstChild != null && firstChild.nodeType == 3){ // skip TextNodes
    firstChild = firstChild.nextSibling;
  }
  return firstChild;
}

/* ----------- MAPKIT IMPLEMENTATION --------------- */


function initMapKit() {
	var hasMap = document.getElementById("map");
	if(hasMap != null) {

		/// Init map with unique key to my developer account
		mapkit.init({
		    authorizationCallback: function(done) {
		        done('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhKVDlBRDVOQVkifQ.eyJpc3MiOiJSSzNUOUJZU0o4IiwiaWF0IjoxNTMyMDIxMzgzLCJleHAiOjE1MzAwMDg0NTUxMDZ9.9WOGLjY3F3DnDC_CtQgF-X60-gzWxfNCaen0l14OLM51vGYleOvK2flS0h62PJxJLe97DL3A4Bb66C_QBPSGRA');
		    }
		});

		/// Create map with region around school
		var StPete = new mapkit.CoordinateRegion(
			new mapkit.Coordinate(27.796160959738796,-82.6322125086437),
			new mapkit.CoordinateSpan(0.057, 0.057)
		);

		var map = new mapkit.Map("map");
		map.region = StPete;

		///  Add a marker for the school to appear on the map
		var MarkerAnnotation = mapkit.MarkerAnnotation;
   		var school = new mapkit.Coordinate(27.8036124, -82.63232749999997)
   		var schoolAnnotation = new MarkerAnnotation(school, { color: "#FFFFFF", title: "North Shore Elementary", glyphText: "🏰" });
   		schoolAnnotation.selected = "true";
   		map.addAnnotation(schoolAnnotation);

   		/// List of points to create a polygon that creates the school zone
   		var points = [ [27.771179518808168,-82.63216656745908], [27.771046616166533, -82.65481514038083], [27.781127769882147, -82.65487951339719], [27.78116573856317, -82.63856095375058], [27.821095516386848,-82.63856095375058], [27.821209380502705,-82.6205365091705], [27.816783732938067,-82.61612478857091], [27.8060795479485,-82.61556688909582], [27.805201117723303,-82.6099449790006], [27.795444887796346,-82.60492388372472], [27.79244047913533,-82.6073216089855], [27.789858846331658,-82.61204229685171], [27.788416142474595,-82.62217031809195],  [27.777450848222355,-82.62651030187658], [27.7774128782445,-82.63007227544836] ];

		// Map the raw coordinates to Coordinates:
		points = points.map(function(point) {
		    return new mapkit.Coordinate(point[0], point[1]);
		});
		var style = new mapkit.Style({
		    strokeColor: "#3C70AC",
		    strokeOpacity: 1,
		    lineWidth: 3,
		    lineJoin: "round",
		    lineDash: [10, 10, 10, 10, 10, 10]
		});

		/// Add the polygon to the map
		var rectangle = new mapkit.PolygonOverlay([points], { style: style });
		map.addOverlay(rectangle);
	}
}

function loadMapKit() {
	loadScript("https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js", function() {
		initMapKit();
	});
}

/* ----------- LAZYLOAD JS ----------- */

/*
https://www.andreaverlicchi.eu/lazyload/
*/

function initLazyLoad() {
	(function(w, d){
		var b = d.getElementsByTagName('body')[0];
		var s = d.createElement("script"); s.async = true;
		var v = !("IntersectionObserver" in w) ? "8.12.0" : "10.12.0";
		s.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/" + v + "/lazyload.min.js";
		w.lazyLoadOptions = {
			elements_selector: ".lazy"
		}; // Your options here. See "recipes" for more information about async.
		b.appendChild(s);
	}(window, document));
}

/* ------------ RESPONSIVE IMAGE DEBUGGING --------- */

function debugImages() {
	var elems = document.querySelectorAll('img');
	elems.forEach( function(el) {
        responsiveImageDebugOutput(el);
    });
}

function debugOverflow() {
	var docWidth = document.documentElement.offsetWidth;[].forEach.call(document.querySelectorAll("*"), function (el) {if (el.offsetWidth > docWidth) el.style.border = "1px solid red"});
}

function responsiveImageDebugOutput(img) {

    if (!img) {
        throw new TypeError("Expected an image node. Got none.");
    }

    if(arguments.length > 1) {
        addToAllElements([].slice.apply(arguments));
        return;
    }

    var evalPrint = function (arg1, arg2, argN) {
        var len = arguments.length;
        var s = "";
        while (len--) {
            var arg = arguments[len];
            var val = eval(arg);

            if(val) {
                s += '[' + arg + "=" + val + ']  ';
            }
        }
        console.log(s);
    }

    var listener = function () {

        //Old browser
        if (typeof img.currentSrc === "undefined") evalPrint('img.src');

        //Modern browser
        else evalPrint('img.currentSrc');
        evalPrint('img.id');
        evalPrint('img.width', 'img.height');
        evalPrint('img.naturalWidth', 'img.naturalHeight');
        evalPrint('window.devicePixelRatio');
        var xDim = img.naturalWidth * window.devicePixelRatio;
        var yDim = img.naturalHeight * window.devicePixelRatio;
        console.log('Resolution: ' + xDim + 'x' + yDim);
    };

    // run the listener function if the image had already loaded 
    // before the listener had been set up
    if (img.complete) listener();

    img.addEventListener('load', listener);
}