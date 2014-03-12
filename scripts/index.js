/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

		$('img#baloon1').animate({bottom: 1200}, 30000, 'linear');
			$('img#baloon2').animate({bottom: 1200}, 30000, 'linear');
				$('img#baloon3').animate({bottom: 1200}, 30000, 'linear');
		
		// On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
		$('.paralaxbg').each(function() {
			$(this).attr('data-bgposition', $(this).css('background-position'));
			
		});
		$('.paralax').each(function() {
			if($(this).css('top') != 'auto')
				$(this).attr('data-top', $(this).css('top'));
			else
				$(this).attr('data-top', 0);
		
		});
		
		
	//	$('h2.post-title').each(function() {
			//$('ul#fixed_menu').append($('<li>').append($(this).children('a').clone()));	
		//});
		
		$(window).scroll(function() {
			$('.paralaxbg').each(function() {
				var position = $(this).data('bgposition').split(' ');
				$(this).css('background-position', position[0]+' '+(parseInt(position[1])+parseInt($(window).scrollTop()*$(this).data('depth')/200))+'px');
			});
			$('.paralax').each(function() {
				$(this).css('top', parseInt($(this).data('top'))+parseInt($(window).scrollTop()*$(this).data('depth')/300));		
			});
			$('.rotatethis').each(function() {
				if($(this).hasClass('anticlockwise'))
					$(this).css('transform', 'rotate('+(0-$(window).scrollTop())+'deg)');
				else
					$(this).css('transform', 'rotate('+$(window).scrollTop()+'deg)');
				
			});
		});

    });

}(jQuery));