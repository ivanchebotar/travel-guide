module.exports = function initDropDown() {
  jQuery('ul.dropdown').animDropdown({
    effect: 'fade',
    animSpeed: 300
  });
}

let dropdownPlugin = require('./../plugins/dropdownPlugin');

dropdownPlugin();