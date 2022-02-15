module.exports = function initAccordion() {
	$('.accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});
}

let accrodionPlugin = require('./../plugins/accordionPlugin');

accrodionPlugin();