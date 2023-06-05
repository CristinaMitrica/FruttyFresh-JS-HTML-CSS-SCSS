import ProductCardMolecule from '../../molecules/product-card/product-card.js';
import FiltersService from '../../../services/filters.js';

export default class AllProductsPage {
    _products = [];

    constructor(productsFetch) {
        this._productsFetch = productsFetch;
        this._getProducts();
    }
    
    renderHTML() {
        return `
            <div class="all-products">
                <h1 class="font--h1">Todos los productos</h1>
                <div class="all-products__filters">
                    <button class="all-products__chip chip--unselected" type="button" data-filter='verduras'>Verduras</button>
                    <button class="all-products__chip chip--unselected" type="button" data-filter='frutas'>Frutas</button>
                    <button class="all-products__chip chip--unselected" type="button" data-filter='zumos'>Zumos</button>
                </div>
                <div id="all-products__content">
                </div>
            </div>
        `
    }

    _getProducts() {
        this._products = this._productsFetch.getProducts();
    }

    _renderProductCardsHTML() {
        return this._products.map(product => {
            const productCardMolecule = new ProductCardMolecule(product);
            return productCardMolecule.renderHTML();
        })
        .join('');
    }

    _renderContentHTML() {
        const content = document.querySelector("#all-products__content");
        content.innerHTML =
        `
            <h2 class="font--h2"> ${this._products.length} resultados de productos</h2>
            <div class="all-products__cards">
                ${this._renderProductCardsHTML()}
            </div>
        `
    }
}

function registerClickOnFilters(filtersService) {
    const filterButtons = document.querySelectorAll('.all-products__chip');
    filterButtons.forEach((filterButton) => {
        filterButton.addEventListener('click', (event) => {
            filtersService.handleFilterButtonClick(event);
            const filters = filtersService.getFilters();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    registerClickOnFilters(new FiltersService());
});