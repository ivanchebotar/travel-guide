const $ = window.$ = window.jQuery = require('jquery');

const initAccordion = require('./components/initAccordion');
const initDropDown = require('./components/initDropdown');
const initStickyScrollBlock = require('./components/initFixedScroll');
const initMobileNav = require('./components/initMobileNav');
// const initSlickSlider = require('./components/initSlick');

initAccordion();
initDropDown();
initStickyScrollBlock();
initMobileNav();
// initSlickSlider();
