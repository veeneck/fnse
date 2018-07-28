$(document).ready(function() {

  	var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('open');
	  $menu.toggleClass('open');
	  return false;
	});

		// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();

	        var offset =  target.offset().top

	        // close menu on mobile
	        if ($menu.hasClass('open')) {
	        	$menulink.toggleClass('open');
	  			$menu.toggleClass('open');
	  			offset = target.offset().top - 100
	        }

	        $('html, body').animate({
	          scrollTop: offset
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });


	$(".triggerMe").inViewport(function(px){
	    if(px) $(this).addClass("triggeredCSS3") ;
	});

	$(".northshoreframed").delay(200).queue(function(){
    	$(this).addClass("triggeredCSS3").dequeue();
	});

	$('.question').click(function(event)  {
		event.preventDefault();
		$(this).toggleClass("arrow-right");
		$(this).toggleClass("arrow-down");
		$(this).parent().next().toggleClass("hide");
		return false;
	});

	if(window.location.hash) {
  		var el = $(window.location.hash)
  		el.toggleClass("arrow-right");
		el.toggleClass("arrow-down");
		el.parent().next().toggleClass("hide");
	} 


	  $('.sample-projects').slick({
		  infinite: false,
		  speed: 300,
		  slidesToShow: 3,
		  arrows: false,
		   responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		        	  centerMode: true,
  			variableWidth: true,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		         dotsClass: "dotstyle",
		        	  centerMode: true,
  			variableWidth: true,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	  });



});

// This would make images parallax themselves if backgorund-image were used instead of img tag
	/*var velocity = 0.05;

function update(){ 
var pos = $(window).scrollTop(); 
$('.coreImage').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height()-18;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
   }); 
   };

 $(window).bind('scroll', update);*/

;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



