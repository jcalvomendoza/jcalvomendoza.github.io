 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
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
			  
		}, 500);
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


$(document).on("scroll", function() {

	if($(document).scrollTop()>10) {
		$("header").removeClass("collapsedNavigationBar").addClass("expandedNavigationBar");
	} else {
		$("header").removeClass("expandedNavigationBar").addClass("collapsedNavigationBar");
	}
	
});




//fade in Booth concentrations when you hover over Booth Logo

$(".chicagoBooth").mouseover(function() {
	$(".chicagoBooth").fadeOut("fast", function (){
		$(".chicagoBooth").attr("src","img/mba_concentrations.png").fadeIn();
	});
})

$(".chicagoBooth").mouseout(function() {
	$(".chicagoBooth").fadeOut("fast", function (){
		$(".chicagoBooth").attr("src","https://jcalvomendoza.github.io/img/BoothLogo.png").fadeIn();
	});
})

//fade in Colgate majors when you hover over Colgate logo

$(".colgateUniversity").mouseover(function() {
	$(".colgateUniversity").fadeOut("fast", function (){
		$(".colgateUniversity").attr("src","img/ba_majors.png").fadeIn();
	});
})

$(".colgateUniversity").mouseout(function() {
	$(".colgateUniversity").fadeOut("fast", function (){
		$(".colgateUniversity").attr("src","https://jcalvomendoza.github.io/img/Colgate University Logo.png").fadeIn();
	});
})