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

    filterProducts(filter) {
        this._isFilterActive(filter)
        ? this._removeFilter(filter)
        : this._addFilter(filter);
    }

    renderHTML() {
        return `
            <div class="all-products">
                <h1 class="font--h1">Todos los productos</h1>
                <div class="all-products__filters">
                    <button class="chip--unselected" type="button" onclick="filterProducts('verduras')">Verduras</button>
                    <button class="chip--unselected" type="button" onclick="filterProducts('frutas')">Frutas</button>
                    <button class="chip--unselected" type="button" onclick="filterProducts('zumos')">Zumos</button>
                </div>
                <h2 class="font--h2">6 resultados de productos</h2>
                <div class="all-products__cards">
                    ${new ProductCardMolecule({name: 'Pera', price: 5}).renderHTML()}
                </div>
            </div>
        `
    }
}