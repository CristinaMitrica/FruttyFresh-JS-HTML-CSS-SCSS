export default class FiltersService {
    _filters = [];

    constructor() {}

    handleFilterButtonClick(event) {
        const filterButton = event.target;
        const filter = filterButton.dataset.filter;
        this._updateFilter(filterButton, filter);
    }
    
    getFilters() {
        return this._filters;
    }

    _addFilter(filter) {
        this._filters = [...this._filters, filter];
    }

    _removeFilter(filter) {
        const filterToRemoveIndex = this._filters.indexOf(filter);
        this._filters.splice(filterToRemoveIndex, 1);
    }

    _isFilterActive(filter) {
        return this._filters.includes(filter);
    }

    _updateFilter(filterButton, filter) {
        if(this._isFilterActive(filter)) {
            filterButton.classList.replace('chip--selected', 'chip--unselected');
            this._removeFilter(filter);
        } else {
            filterButton.classList.replace('chip--unselected', 'chip--selected');
            this._addFilter(filter);
        }
    }
}