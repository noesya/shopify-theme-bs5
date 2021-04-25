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
            container: '.js-carousel',
            items: 1,
            autoplay: true,
            autoplayButtonOutput: false,
            loop: false
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Carousel.init();
});
