$(document).ready(function(){
	$('body').jCookie({
		name 		: "jCookie",
		value		: "1",
        expireTime	: 365,
        insertBefore: "body",
        text		: "Este sitio utiliza cookies para mejorar la experiencia de navegacion",
        linkText	: "Consulta aqui para mas info",
        linkUrl		: "https://github.com/iJos/jCookie"
	});
});