window.stk.Common = {
    scroll: function () {
        'use strict';
        window.stk.position.x = window.pageXOffset;
        window.stk.position.y = window.pageYOffset;
    }
};

window.stk.position = {
    x: 0,
    y: 0
};

window.addEventListener('scroll', function () {
    'use strict';
    window.stk.Common.scroll();
});
