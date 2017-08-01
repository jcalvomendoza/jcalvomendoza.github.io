 /**
 * Again, I did the IKEA assembly, this is the dude that deserves the credit:  Petr Tichy @ Ihatetomatoes.net
 */

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$subSlide = $('.homeSlideSub');
	$footer = $('.footer');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 2000);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
		$slide.height(winH);
		$subSlide.height(winH/4);
		$footer.height(winH/20);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
} )( jQuery );