const $ = window.$ = window.jQuery = require('jquery');

let initAccordion = require('./components/initAccordion');
let initDropDown = require('./components/initDropdown');
let initStickyScrollBlock = require('./components/initFixedScroll');
let initMobileNav = require('./components/initMobileNav');
let initSlickSlider = require('./components/initSlick');

initAccordion();
initDropDown();
initStickyScrollBlock();
initMobileNav();
initSlickSlider();