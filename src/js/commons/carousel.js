/* global tns */
// import { tns } from './node_modules/tiny-slider/src/tiny-slider'

window.stk.Carousel = {
    init: function () {
        'use strict';
        this.sliderElm = document.querySelectorAll('.js-carousel');
        if (this.sliderElm !== null) {
            this.set();
        }
    },
    set: function () {
        'use strict';
        tns({
            autoplay: true,
            autoplayButtonOutput: false,
            container: '.js-carousel',
            items: 1,
            loop: false,
            mouseDrag: true
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Carousel.init();
});
