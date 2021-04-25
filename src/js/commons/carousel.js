/* global tns */
// import { tns } from './node_modules/tiny-slider/src/tiny-slider'

window.stk.Carousel = {
    init: function () {
        'use strict';
        var slider = null;
        this.sliderElm = document.querySelectorAll('.js-carousel');
        if (this.sliderElm === null) {
            return;
        }
        slider = tns({
            container: '.js-carousel',
            items: 1,
            slideBy: 'page',
            autoplay: true
        });
    }
};

window.addEventListener('scroll', function () {
    'use strict';
    window.stk.Carousel.init();
});
