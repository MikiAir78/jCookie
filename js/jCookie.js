(function($){
	
	$.fn.jCookie = function(options){
		
		// Start with the defaults
		defaults = {
			name 		: "jCookie",
			value		: "1",
	        expireTime	: 365,
	        insertBefore: "body",
	        text		: "This site is using Cookies!",
	        linkText	: "",
        	linkUrl		: ""
	    };
	    	  
	    // Override defaults if we have options	  
	    var settings = $.extend(defaults, options);	  
		
		
		checkCookie(settings);


		// ON CLICK CLOSE
		$('.cookie-close-button').click(function(){
			hideCookieAlert(settings);
		});

	};
	
	
	var cookieAlert = function(settings){
		var cookieDiv = "<div class='cookies'>" + settings.text + " " + "<a href='" + settings.linkUrl + "' target='_blank'>" + settings.linkText + "</a> <div class='cookie-close-button'>X</div></div>";
		$(cookieDiv).insertBefore(settings.insertBefore);
	}
	
	var hideCookieAlert = function(settings){
		$('.cookies').hide();	
		setCookie(settings);
	}
	
	var checkCookie = function(settings){
		
		if (getCookie(settings) != settings.value) {	
			//Create out COOKIE DIV!	
			cookieAlert(settings);
		}else{
			
		}
	
	}
	
	var setCookie = function(settings) {	
		$.cookie(settings.name, settings.value, { 
			expires: settings.expireTime
		});
	}
	
	var getCookie = function(settings) {
		return $.cookie(settings.name);	
	}

	


})(jQuery);






