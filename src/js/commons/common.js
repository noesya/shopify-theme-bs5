window.jd.Common = {
    scroll: function () {
        'use strict';
        window.jd.position.x = window.pageXOffset;
        window.jd.position.y = window.pageYOffset;

        if (!window.jd.Product.widgetElm) {
            return null;
        }
        window.jd.Product.widget();
    }
};

window.jd.position = {
    x: 0,
    y: 0
};

window.addEventListener('scroll', function () {
    'use strict';
    window.jd.Common.scroll();
});
