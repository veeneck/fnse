$(document).ready(function(){var e=$("#menu"),t=$(".menu-link");t.click(function(){return t.toggleClass("open"),e.toggleClass("open"),!1}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(n){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length){n.preventDefault();var a=o.offset().top;e.hasClass("open")&&(t.toggleClass("open"),e.toggleClass("open"),a=o.offset().top-100),$("html, body").animate({scrollTop:a},1e3,function(){var e=$(o);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()})}}})});