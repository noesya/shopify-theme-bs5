import * as cart from '@shopify/theme-cart';

window.stk.Cart = {
    init: function () {
        'use strict';
        this.notifElm = document.querySelectorAll('.js-cart-notif');
        this.formElm = document.querySelector('.js-cart-form');
        if (this.formElm !== null) {
            this.qtyElm = document.querySelectorAll('.js-cart-qty');
            this.events();
        }
    },
    events: function () {
        'use strict';
        var that = this;
        this.qtyElm.forEach(function (variant) {
            variant.addEventListener('change', function () {
                var key = this.dataset.key,
                    quantity = Number(this.value);
                that.update(key, quantity);
            });
        });
    },
    setNotif: function (qty) {
        'use strict';
        this.notifElm.forEach(function (elm) {
            elm.innerHTML = qty;
        });
    },
    getNotif: function () {
        'use strict';
        return Number(this.notifElm[0].innerHTML);
    },
    addFromForm: function (form, quantity) {
        'use strict';
        cart.addItemFromForm(form).then(item => {
            console.log(`An item was added to your cart:`, item);
            window.stk.Product.stateAddtocart(false);
            this.setNotif(this.getNotif() + quantity)
        });
    },
    add: function (id, quantity, properties) {
        'use strict';
        cart.addItem(id, { quantity, properties }).then(item => {
            console.log(`An item with a quantity of ${quantity} was added to your cart:`, item);
            window.stk.Product.stateAddtocart(false);
            this.setNotif(this.getNotif() + quantity)
        });
    },
    update: function (key, quantity) {
        'use strict';
        cart.updateItem(key, { quantity }).then(state => {
            document.location.reload();
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Cart.init();
});
