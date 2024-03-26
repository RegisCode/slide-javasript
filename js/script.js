import {Slide, SlideNav} from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper'); // Ajuste aqui para '.slide' e '.slide-wrapper'
slide.init();
slide.addArrow('.prev', '.next');
