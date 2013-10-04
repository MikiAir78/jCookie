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

More Info About EU Cookie Law
-----------------------------

* [Is the EU's cookie law confusing you too?](http://www.123-reg.co.uk/blog/security-issues/is-the-eus-cookie-law-confusing-you-too/)
* [New EU cookie law (e-Privacy Directive)](http://www.ico.gov.uk/for_organisations/privacy_and_electronic_communications/the_guide/cookies.aspx)
* [Cookies – Doing nothing isn't the right answer](http://chriswharton.me/2012/05/cookies-doing-nothing-isnt-the-right-answer/)


Copyright
---------

Copyright (c) 2013 Jose Luis Jimenez | @iJos.