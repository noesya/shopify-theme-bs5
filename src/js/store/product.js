window.stk.Product = {
    init: function () {
        'use strict';
        this.formElm = document.querySelector('.js-addtocart-form');
        if (this.formElm !== null) {
            this.addtocartElm = document.querySelectorAll('.js-addtocart');
            this.widgetElm = document.querySelector('.js-addtocart-widget');
            this.form();
        }
    },
    form: function () {
        'use strict';
        console.log('form');
        this.formElm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('submit');
            this.addtocartElm.forEach(function (elm) {
                elm.disabled = true;
            });
        }.bind(this));
    },
    widget: function () {
        'use strict';
        if (window.jd.position.y > 300) {
            this.widgetElm.classList.add('show');
        } else {
            this.widgetElm.classList.remove('show');
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Product.init();
});
