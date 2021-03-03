Shopify.CustomerAddress = Shopify.CustomerAddress || {};

Shopify.CustomerAddress = {
  init: function (e, t) {
    this.initDelete();
    this.initProvince();
  },
  initDelete: function () {
    document
      .querySelectorAll('.js-address-delete')
      .forEach(function(button) {
        button.addEventListener('click', function(evt) {
          var target = evt.target.dataset.target,
              confirmMessage = evt.target.dataset.confirmMessage;

          // eslint-disable-next-line no-alert
          if (
            confirm(
              confirmMessage || 'Are you sure you wish to delete this address?'
            )
          ) {
            Shopify.postLink(target, {
              parameters: { _method: 'delete' }
            });
          }
        });
      });

  },
  initProvince: function () {
    document
      .querySelectorAll('.js-address-country')
      .forEach(function(option) {
        var formId = option.dataset.formId,
            countrySelector = 'country_' + formId,
            provinceSelector = 'province_' + formId
            containerSelector = 'province_container_' + formId;

        new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
            hideElement: containerSelector
        });
      });
  }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    Shopify.CustomerAddress.init();
});
