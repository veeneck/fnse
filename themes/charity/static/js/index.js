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

});

