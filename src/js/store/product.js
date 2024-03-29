window.stk.Product = {
    init: function () {
        'use strict';
        this.formElm = document.querySelector('.js-addtocart-form');
        this.widgetElm = document.querySelector('.js-addtocart-widget');
        if (this.formElm !== null) {
            this.addtocartElm = document.querySelectorAll('.js-addtocart');
            this.variantElm = document.querySelectorAll('.js-product-variant');
            this.priceElm = document.querySelectorAll('.js-product-price');
            this.priceDiscountElm = document.querySelectorAll('.js-product-price-discount');
            this.qtyElm = document.querySelector('.js-product-qty');
            this.events();
        }
    },
    events: function () {
        'use strict';
        var that = this;
        this.formElm.addEventListener('submit', function (e) {
            that.submit(this);
            e.preventDefault();
        });
        if (this.variantElm.length > 0) {
            this.idElm = document.querySelector('.js-product-id');
            this.variantElm.forEach(function (variant) {
                variant.addEventListener('change', function () {
                    that.getCurrentOptions();
                    that.setCurrentOptions();
                });
            });
        }
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
        var isAvailable = false,
            that = this,
            selected = this.currentOptions.join(' / '),
            options = Array.from(this.idElm.options);
        options.forEach(function (option, i) {
            if (option.text === selected) {
                that.idElm.selectedIndex = i;
                that.setPrice(option);
                that.setPriceDiscount(option);
                if (!option.disabled) {
                    isAvailable = true;
                }
            }
        });
        this.setAddtocart(isAvailable);
    },
    setPrice: function (option) {
        'use strict';
        var i;
        for (i = 0; i < this.priceElm.length; i += 1) {
            this.priceElm[i].innerHTML = option.dataset.price;
        }
    },
    setPriceDiscount: function (option) {
        'use strict';
        var i;
        for (i = 0; i < this.priceDiscountElm.length; i += 1) {
            if (option.dataset.compare) {
                this.priceDiscountElm[i].style.display = 'inline';
            } else {
                this.priceDiscountElm[i].style.display = 'none';
            }
            this.priceDiscountElm[i].innerHTML = option.dataset.compare;
        }
    },
    setAddtocart: function (isAvailable) {
        'use strict';
        if (!isAvailable) {
            this.stateAddtocart(true);
        } else {
            this.stateAddtocart(false);
        }
    },
    stateAddtocart: function (state) {
        'use strict';
        this.addtocartElm.forEach(function (elm) {
            elm.disabled = state;
        });
    },
    submit: function (form) {
        'use strict';
        var quantity = Number(this.qtyElm.value);
        this.stateAddtocart(true);
        window.stk.Cart.addFromForm(form, quantity);
    },
    add: function (id, quantity, properties) {
        'use strict';
        this.stateAddtocart(true);
        window.stk.Cart.add(id, quantity, properties);
    },
    widget: function () {
        'use strict';
        if (window.stk.position.y > 200) {
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

window.addEventListener('scroll', function () {
    'use strict';
    if (window.stk.Product.widgetElm !== null) {
        window.stk.Product.widget();
    }
});
