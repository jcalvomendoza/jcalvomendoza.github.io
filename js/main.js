 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

$(window).load(function() {
	$("body").removeClass("loading");
  });


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
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
} )( jQuery );


$(document).on("scroll", function() {

	if($(document).scrollTop()> $(window).height()*.8) {
		$("header").removeClass("collapsedNavigationBar").addClass("expandedNavigationBar");
	} else {
		$("header").removeClass("expandedNavigationBar").addClass("collapsedNavigationBar");
	}
	
});

/* This nasty block was my first try to get the fade on scroll effect, so clueless

$(document).on("scroll", function() {
        if($(document).scrollTop()> $(window).height()*.5 && $(document).scrollTop()< $(window).height()*.55) {
            $(".about_me_blurb").css("opacity", ".1")
		} else if ($(document).scrollTop()> $(window).height()*.55 && $(document).scrollTop()< $(window).height()*.6) {
			$(".about_me_blurb").css("opacity", ".2")
		} else if ($(document).scrollTop()> $(window).height()*.6 && $(document).scrollTop()< $(window).height()*.65) {
			$(".about_me_blurb").css("opacity", ".3")
		} else if ($(document).scrollTop()> $(window).height()*.65 && $(document).scrollTop()< $(window).height()*.7) {
			$(".about_me_blurb").css("opacity", ".4")
		} else if ($(document).scrollTop()> $(window).height()*.7 && $(document).scrollTop()< $(window).height()*.75) {
			$(".about_me_blurb").css("opacity", ".5")
		} else if ($(document).scrollTop()> $(window).height()*.75 && $(document).scrollTop()< $(window).height()*.8) {
			$(".about_me_blurb").css("opacity", ".6")
		} else if ($(document).scrollTop()> $(window).height()*.8 && $(document).scrollTop()< $(window).height()*.85) {
			$(".about_me_blurb").css("opacity", ".7")
		} else if ($(document).scrollTop()> $(window).height()*.85 && $(document).scrollTop()< $(window).height()*.9) {
			$(".about_me_blurb").css("opacity", ".8")
		} else if ($(document).scrollTop()> $(window).height()*.9 && $(document).scrollTop()< $(window).height()*.95) {
			$(".about_me_blurb").css("opacity", ".9")
		} else if ($(document).scrollTop()> $(window).height()*.95) {
			$(".about_me_blurb").css("opacity", "1")
		} else {
            $(".about_me_blurb").css("opacity", "0");
        }
        
    });*/

	/* Then I figured this badboy out */

	$(document).on("scroll", function() {
		var scrollpct1 = (($(window).height()*1) - $(document).scrollTop()*3)/$(window).height();
		document.getElementById("BotChatGoesHere").style.opacity = scrollpct1.toString();
	});
	
/*	$(document).on("scroll", function() {
		var scrollpct2 = (($(window).height()*1) - $(document).scrollTop()*9)/$(window).height();
		if (scrollpct2 > 0) {document.getElementById("BotChatGoesHere").style.height = '98.5vh'} else 
		{document.getElementById("BotChatGoesHere").style.height = '0vh'};
	});*/

	$(document).on("scroll", function() {
		var scrollpct3 = ($(document).scrollTop()- ($(window).height()*0.2))*1.5/$(window).height();
		$(".about_me_blurb").css("opacity", scrollpct3.toString());
	});

	$(document).on("scroll", function() {
		var scrollpct4 = ($(document).scrollTop()/($(window).height()*3.5))/5;
		$(".graduation_pic").css("opacity", scrollpct4.toString());
	});

	$(document).on("scroll", function() {
		var scrollpct5 = ($(document).scrollTop()- ($(window).height()*2.2))*1.5/$(window).height();
		$(".hockey_blurb").css("opacity", scrollpct5.toString());
	});

/* NAV BAR ANIMATIONS */

/* HOME NAV */

$(".home_nav_link").on("mouseover", function() {
	$(".home_nav_link").css("opacity", "1");
});
$(".home_nav_link").on("mouseout", function() {
	$(".home_nav_link").css("opacity", ".2");
});

/* ABOUT ME NAV */

	$(document).on("scroll", function() {
		if ((($(document).scrollTop()/($(window).height())) > .9 && ($(document).scrollTop()/($(window).height())) < 1.1) || (($(document).scrollTop()/($(window).height())) > 1.6 && ($(document).scrollTop()/($(window).height())) < 1.9)) {
			$(".about_me_nav_link").css("opacity", "1");
		} else {$(".about_me_nav_link").css("opacity", ".2");
	}
	});

	$(".about_me_nav_link").on("mouseover", function() {
		$(".about_me_nav_link").css("opacity", "1");
	});
	$(".about_me_nav_link").on("mouseout", function() {
		if(($(document).scrollTop()/($(window).height())) > .9 && ($(document).scrollTop()/($(window).height())) < 1.9){
			$(".about_me_nav_link").css("opacity", "1");
		} else {
		$(".about_me_nav_link").css("opacity", ".2");
		}
	});

/* EDUCATION NAV */

$(document).on("scroll", function() {
	if (($(document).scrollTop()/($(window).height())) > 1.9 && ($(document).scrollTop()/($(window).height())) < 2.9) {
		$(".education_nav_link").css("opacity", "1");
	} else {$(".education_nav_link").css("opacity", ".2");
}
});

$(".education_nav_link").on("mouseover", function() {
	$(".education_nav_link").css("opacity", "1");
});
$(".education_nav_link").on("mouseout", function() {
	if(($(document).scrollTop()/($(window).height())) > 1.9 && ($(document).scrollTop()/($(window).height())) < 2.9){
		$(".education_nav_link").css("opacity", "1");
	} else {
	$(".education_nav_link").css("opacity", ".2");
	}
});

/* WORK NAV */

$(".work_nav_link").on("mouseover", function() {
	$(".work_nav_link").css("opacity", "1");
});
$(".work_nav_link").on("mouseout", function() {
	$(".work_nav_link").css("opacity", ".2");
});

/* PERSONAL NAV */

/*$(document).on("scroll", function() {
	if ((($(document).scrollTop()/($(window).height())) > .9 && ($(document).scrollTop()/($(window).height())) < 1.1) || (($(document).scrollTop()/($(window).height())) > 1.6 && ($(document).scrollTop()/($(window).height())) < 1.9)) {
		$(".about_me_nav_link").css("opacity", "1");
	} else {$(".about_me_nav_link").css("opacity", ".2");
}
});*/

$(".personal_nav_link").on("mouseover", function() {
	$(".personal_nav_link").css("opacity", "1");
});
$(".personal_nav_link").on("mouseout", function() {
	if(($(document).scrollTop()/($(window).height())) > .9 && ($(document).scrollTop()/($(window).height())) < 1.9){
		$(".personal_nav_link").css("opacity", "1");
	} else {
	$(".personal_nav_link").css("opacity", ".2");
	}
});

/* CONTACT NAV */

$(".contact_me_nav_link").on("mouseover", function() {
	$(".contact_me_nav_link").css("opacity", "1");
});
$(".contact_me_nav_link").on("mouseout", function() {
	$(".contact_me_nav_link").css("opacity", ".2");
});