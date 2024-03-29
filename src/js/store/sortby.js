window.stk.SortBy = {
    init: function () {
        'use strict';
        this.sortSelect = document.querySelector('.js-sortby');
        if (this.sortSelect !== null) {
            this.params();
            this.event();
        }
    },
    params: function () {
        'use strict';
        this.queryParams = {};
        this.defaultSort = this.getDefaultSortValue();
    },
    event: function () {
        'use strict';
        this.sortSelect.addEventListener('change', this.onChange.bind(this));
    },
    onChange: function () {
        'use strict';
        this.queryParams.sort_by = this.getSortValue();
        if (this.queryParams.page) {
            delete this.queryParams.page;
        }
        window.location.search = decodeURIComponent(new URLSearchParams(Object.entries(this.queryParams)).toString());
    },
    getSortValue: function () {
        'use strict';
        return this.sortSelect.value || this.defaultSort;
    },
    getDefaultSortValue: function () {
        'use strict';
        return this.sortSelect.dataset.defaultSortby;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    window.stk.SortBy.init();
});
