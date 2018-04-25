$(document).ready(function() {

  	var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('open');
	  $menu.toggleClass('open');
	  return false;
	});

});
