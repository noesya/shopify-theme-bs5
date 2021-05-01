import * as cart from '@shopify/theme-cart';

window.stk.Product = {
    init: function () {
        'use strict';
        this.formElm = document.querySelector('.js-addtocart-form');
        if (this.formElm !== null) {
            this.addtocartElm = document.querySelectorAll('.js-addtocart');
            this.variantElm = document.querySelectorAll('.js-product-variant');
            this.idElm = document.querySelector('.js-product-id');
            this.qtyElm = document.querySelector('.js-product-qty');
            this.notifElm = document.querySelector('.js-cart-notif');
            this.submit();
            if (this.variantElm.length > 0) {
                this.select();
            }
        }
    },
    select: function () {
        'use strict';
        var that = this;
        this.variantElm.forEach(function (variant) {
            variant.addEventListener('change', function (e) {
                e.preventDefault();
                that.getCurrentOptions();
                that.setCurrentOptions();
            });
        });
    },
    getCurrentOptions: function () {
        'use strict';
        this.currentOptions = [];
        this.variantElm.forEach(function (variant) {
            if (variant.type === 'radio' && variant.checked) {
                this.currentOptions.push(variant.value);
            } else if (variant.type !== 'radio') {
                this.currentOptions.push(variant.value);
            }
        }.bind(this));
    },
    setCurrentOptions: function () {
        'use strict';
        var that = this,
            selected = this.currentOptions.join(' / '),
            options = Array.from(this.idElm.options);
        options.forEach(function (option, i) {
            if (option.text === selected) {
                that.idElm.selectedIndex = i;
            }
        });
    },
    submit: function () {
        'use strict';
        var that = this;
        this.formElm.addEventListener('submit', function (e) {
            var id = Number(that.idElm.value),
                quantity = Number(that.qtyElm.value),
                properties = '',
                notif = Number(that.notifElm.innerHTML);
            that.addtocartElm.forEach(function (elm) {
                elm.disabled = true;
            });
            cart.addItem(id, { quantity, properties }).then(item => {
                console.log(`An item with a quantity of ${quantity} was added to your cart:`, item);
                that.addtocartElm.forEach(function (elm) {
                    elm.disabled = false;
                });
                that.notifElm.innerHTML = notif + quantity;
            });
            e.preventDefault();
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.Product.init();
});
