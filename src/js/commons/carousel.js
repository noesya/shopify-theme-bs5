/* global Splide */
window.stk.carousel = {
    instances: [],
    init: function () {
        'use strict';
        this.elm = document.querySelectorAll('.js-carousel');
        if (this.elm.length === 0) {
            return;
        }
        this.get();
    },

    get: function () {
        'use strict';
        var targetId,
            i = 0;
        for (i; i < this.elm.length; i += 1) {
            targetId = null;
            if (this.elm[i].dataset.target) {
                targetId = this.elm[i].dataset.target;
            }
            this.set(this.elm[i], targetId);
        }
    },

    set: function (elm, targetId) {
        'use strict';
        var instance = new Splide(elm);
        this.instances[elm.id] = instance;

        if (targetId) {
            this.sync(instance, targetId);
        }

        instance.mount();
    },

    sync: function (instance, targetId) {
        'use strict';
        var target = new Splide('#' + targetId);

        if (!target) {
            return null;
        }

        target.mount();
        instance.sync(target);
    },

    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

(function () {
    'use strict';
    window.stk.carousel.init();
}());
