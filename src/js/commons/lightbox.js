window.stk.lightbox = {
    init: function () {
        'use strict';
        this.elm = document.querySelector('.js-glightbox');
        if (!this.elm) {
            return false;
        }
        this.toggle();
    },

    toggle: function () {
        'use strict';
        new GLightbox({
            selector: '.js-glightbox',
            loop: true,
            type: 'image'
        });
    },

    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.lightbox.init();
});
