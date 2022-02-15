module.exports = function initMobileNav() {
	$('body').mobileNav({
		menuActiveClass: 'nav-active',
		menuOpener: '.nav-opener',
		hideOnClickOutside: true,
		menuDrop: '.drop'
	});
}

let mobileNavPlugin = require('./../plugins/mobileNavPlugin');

mobileNavPlugin();
