module.exports = function initStickyScrollBlock() {
	$('#header-fixed').stickyScrollBlock({
		setBoxHeight: true,
		activeClass: 'fixed-position',
		positionType: 'fixed',
		extraTop: function() {
			var totalHeight = 0;
			jQuery('0').each(function() {
				totalHeight += jQuery(this).outerHeight();
			});
			return totalHeight;
		}
	});
}

let fixedScrollPlugin = require('./../plugins/fixedScrollPlugin');

fixedScrollPlugin();