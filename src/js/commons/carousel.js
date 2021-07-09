import { tns } from 'tiny-slider/src/tiny-slider';

window.stk.Carousel = {
    init: function () {
        'use strict';
        this.sliderElm = document.querySelector('.js-carousel');
        if (this.sliderElm !== null) {
            this.set();
        }
    },
    set: function () {
        'use strict';
        var controlsText = ['prev', 'next'];
        if (this.sliderElm.dataset.prev) {
            controlsText[0] = this.sliderElm.dataset.prev;
        }
        if (this.sliderElm.dataset.next) {
            controlsText[1] = this.sliderElm.dataset.next;
        }
        tns({
            autoplay: true,
            autoplayButtonOutput: false,
            container: '.js-carousel',
            items: 1,
            loop: false,
            mouseDrag: true,
            controlsText: controlsText
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Carousel.init();
});
