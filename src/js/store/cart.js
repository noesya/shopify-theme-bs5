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
    update: function (key, quantity) {
        'use strict';
        var that = this;
        cart.updateItem(key, { quantity }).then(state => {
            document.location.reload();
            // var item = state.items.find(item => item.key === key);
            // that.setNotif(state.item_count);
            // console.log(state);
            // console.log(`The item with key '${key}' now has quantity ${item.quantity}`);
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Cart.init();
});
