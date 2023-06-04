export default class FiltersService {
    _filters = [];

    constructor() {}

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

    _updateFilter(filter) {
        this._isFilterActive(filter)
        ? this._removeFilter(filter)
        : this._addFilter(filter);
    }

    _toggleFilterButtonClass(filterButton, filter) {
        this._isFilterActive(filter)
        ? filterButton.classList.replace('chip--selected', 'chip--unselected')
        : filterButton.classList.replace('chip--unselected', 'chip--selected');
    }

    handleFilterButtonClick(event) {
        const filterButton = event.target;
        const filter = filterButton.dataset.filter;
        this._updateFilter(filter);
        this._toggleFilterButtonClass(filterButton, filter);
    }
}