jCookie
===========

A really lightweight jQuery plugin to handle with the new Europe Cookie Law

Dependencies
------------

This plugin uses the following dependences

Last jQuery Version
* [jQuery](https://github.com/jquery/jquery)

Last jQuery Cookie from carhartl
* [jQuery.cookie](https://github.com/carhartl/jquery-cookie)

Use
------

Add `jCookie.js`, after jQuery and jQuery.cookie, and `jCookie.css` to the head of your HTML document. Then call jCookie on document ready.

```javascript
$(document).ready(function () {

  $('body').jCookie({
		name 		: "jCookie",
		value		: "1",
        expireTime	: 365,
        insertBefore: "body",
        text		: "This site is using cookies to improve your navigation experience",
        linkText	: "Check here for more info",
        linkUrl		: "#"
	});
	
});
```
### PARAMETERS


#### name

Set the cookie name. Default `jCookie`
`name 		: "jCookie"`


#### value

Set the cookie value. Default `1`
`value 		: "1"`


#### expireTime

Set the days to expire the cookie. Default `365 days`
`expireTime 	: 365`


#### insertBefore

Set where you want to insert the 'div' who contains the alert. Default `body`
`insertBefore 	: "body"`


#### text

Set the text you want to show in the 'div' alert. Default `This site is using cookies to improve your navigation experience`
`text 	: "This site is using cookies to improve your navigation experience"`


#### linkText

Set the text you want to show in the link. Default `Check here for more info`
`linkText 	: "Check here for more info"`


#### linkUrl

Set the link to privacy policy or somethin else. Default empty `#`
`linkUrl 	: "#"`



REMEMBER!
------

You need to import the Add `jquery.cookie.js`from carhartl in your header BEFORE import this plugin.


More Info About EU Cookie Law
-----------------------------

* [Is the EU's cookie law confusing you too?](http://www.123-reg.co.uk/blog/security-issues/is-the-eus-cookie-law-confusing-you-too/)
* [New EU cookie law (e-Privacy Directive)](http://www.ico.gov.uk/for_organisations/privacy_and_electronic_communications/the_guide/cookies.aspx)
* [Cookies – Doing nothing isn't the right answer](http://chriswharton.me/2012/05/cookies-doing-nothing-isnt-the-right-answer/)



Who is using jCookie?
------

If you want to be here, send an email to ijos@ijos.es and we will add you! :)

* [FrikiLeaks](http://www.frikileaks.es/)




Copyright
---------

Copyright (c) 2013 Jose Luis Jimenez | @iJos.