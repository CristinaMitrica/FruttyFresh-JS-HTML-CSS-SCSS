import ProductCardMolecule from '../../molecules/product-card/product-card.js';

export default class AllProductsPage {
    _filters = [];

    constructor() {}

    _addFilter(filter) {
        this._filters = [...this._filters, filter]
    }

    _removeFilter(filter) {
        const filterToRemoveIndex = this._filters.indexOf(filter);
        this._filters.splice(filterToRemoveIndex, 1);
    }

    _isFilterActive(filter) {
        return this._filters.includes(filter);
    }

    filterProducts(elementRef, filter) {
        this._isFilterActive(filter)
        ? this._removeFilter(filter)
        : this._addFilter(filter);
        console.log(elementRef);
    }

    renderHTML() {
        return `
            <div class="all-products">
                <h1 class="font--h1">Todos los productos</h1>
                <div class="all-products__filters">
                    <button class="chip--unselected" type="button" onclick="${this.filterProducts(this, 'verduras')}">Verduras</button>
                    <button class="chip--unselected" type="button" onclick="${this.filterProducts(this, 'frutas')}">Frutas</button>
                    <button class="chip--unselected" type="button" onclick="${this.filterProducts(this, 'zumos')}">Zumos</button>
                </div>
                <h2 class="font--h2">6 resultados de productos</h2>
                <div class="all-products__cards">
                    ${new ProductCardMolecule({name: 'Pera', price: 5}).renderHTML()}
                </div>
            </div>
        `
    }
}