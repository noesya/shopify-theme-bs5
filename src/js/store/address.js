window.jd.CustomerAddress = {
    init: function () {
        'use strict';
        this.initDelete();
        this.initProvince();
    },
    initDelete: function () {
        'use strict';
        document
            .querySelectorAll('.js-address-delete')
            .forEach(function (button) {
                button.addEventListener('click', function (evt) {
                    var target = evt.target.dataset.target,
                        confirmMessage = evt.target.dataset.confirmMessage;
                    if (
                        confirm(confirmMessage || 'Are you sure you wish to delete this address?')
                    ) {
                        Shopify.postLink(target, {
                            parameters: { _method: 'delete' }
                        });
                    }
                });
            });
    },
    initProvince: function () {
        'use strict';
        document
            .querySelectorAll('.js-address-country')
            .forEach(function (option) {
                var formId = option.dataset.formId,
                    countrySelector = 'country_' + formId,
                    provinceSelector = 'province_' + formId,
                    containerSelector = 'province_container_' + formId;

                new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
                    hideElement: containerSelector
                });
            });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.jd.CustomerAddress.init();
});
