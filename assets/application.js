"use strict";window.stk={},window.stk.Carousel={init:function(){this.sliderElm=document.querySelectorAll(".js-carousel"),null!==this.sliderElm&&this.set()},set:function(){tns({container:".js-carousel",items:1,autoplay:!0,autoplayButtonOutput:!1,loop:!1})}},document.addEventListener("DOMContentLoaded",function(){window.stk.Carousel.init()}),window.stk.Common={scroll:function(){if(window.stk.position.x=window.pageXOffset,window.stk.position.y=window.pageYOffset,!window.stk.Product.widgetElm)return null;window.stk.Product.widget()}},window.stk.position={x:0,y:0},window.addEventListener("scroll",function(){window.stk.Common.scroll()}),window.stk.CustomerAddress={init:function(){this.initDelete(),this.initProvince()},initDelete:function(){document.querySelectorAll(".js-address-delete").forEach(function(t){t.addEventListener("click",function(t){var e=t.target.dataset.target,t=t.target.dataset.confirmMessage;confirm(t||"Are you sure you wish to delete this address?")&&Shopify.postLink(e,{parameters:{_method:"delete"}})})})},initProvince:function(){document.querySelectorAll(".js-address-country").forEach(function(t){t=t.dataset.formId;new Shopify.CountryProvinceSelector("country_"+t,"province_"+t,{hideElement:"province_container_"+t})})}},document.addEventListener("DOMContentLoaded",function(){window.stk.CustomerAddress.init()}),window.stk.Product={init:function(){this.addtocartElm=document.querySelectorAll(".js-addtocart"),this.formElm=document.querySelector(".js-addtocart-form"),this.widgetElm=document.querySelector(".js-addtocart-widget"),null!==this.addtocartElm&&this.form()},form:function(){console.log("form"),this.formElm.addEventListener("submit",function(t){t.preventDefault(),console.log("submit"),this.addtocartElm.forEach(function(t){t.disabled=!0})}.bind(this))},widget:function(){300<window.jd.position.y?this.widgetElm.classList.add("show"):this.widgetElm.classList.remove("show")}},document.addEventListener("DOMContentLoaded",function(){window.stk.Product.init()}),window.stk.SortBy={init:function(){this.sortSelect=document.querySelector(".js-sortby"),console.log(this.sortSelect),null!==this.sortSelect&&this.initChange()},initChange:function(){this.queryParams={},this.defaultSort=this.getDefaultSortValue(),this.sortSelect.addEventListener("change",this.onChange.bind(this))},onChange:function(){this.queryParams.sortBy=this.getSortValue(),this.queryParams.page&&delete this.queryParams.page,window.location.search=decodeURIComponent(new URLSearchParams(Object.entries(this.queryParams)).toString())},getSortValue:function(){return this.sortSelect.value||this.defaultSort},getDefaultSortValue:function(){return this.sortSelect.dataset.defaultSortby}},document.addEventListener("DOMContentLoaded",function(){window.stk.SortBy.init()});
//# sourceMappingURL=application.js.map
