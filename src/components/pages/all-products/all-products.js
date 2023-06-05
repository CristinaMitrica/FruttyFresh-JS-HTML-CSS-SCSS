import ProductCardMolecule from '../../molecules/product-card/product-card.js';
import app from '../../../app.js';

export default class AllProductsPage {
    _products = [];

    constructor(
        productsFetch, 
        filtersService,
    ) {
        this._productsFetch = productsFetch;
        this._filtersService = filtersService;
        this._getProducts();
    }

    renderComponentHTML() {
        return `
            <div class="all-products">
                <h1 class="all-products__h1 font--h1">Todos los productos</h1>
                <div class="all-products__filters">
                    <button class="all-products__chip chip--unselected" type="button" data-filter='verdura'>Verdura</button>
                    <button class="all-products__chip chip--unselected" type="button" data-filter='fruta'>Fruta</button>
                    <button class="all-products__chip chip--unselected" type="button" data-filter='zumo'>Zumo</button>
                </div>
                <div class="all-products__content">
                </div>
            </div>
        `
    }

    filterProducts(filters = []) {
        const filteredProducts = (filters.length === 0)
        ? this._products
        : this._products.filter(product => filters.includes(product.type));
        this._renderContentHTML(filteredProducts);
    }

    registerClickEventOnFilters() {
        const filterButtons = document.querySelectorAll('.all-products__chip');
        filterButtons.forEach((filterButton) => {
            filterButton.addEventListener(
                'click', 
                (event) => this._onClickFilterActions(
                    event, 
                    this._filtersService
            ));
        });
    }
    
    _onClickFilterActions(event) {
        this._filtersService.handleFilterButtonClick(event);
        const filters = this._filtersService.getFilters();
        this.filterProducts(filters);
    }

    _getProducts() {
        this._products = this._productsFetch.getProducts();
    }

    _renderProductCardsHTML(products = []) {
        return products.map(product => {
            const productCardMolecule = new ProductCardMolecule(product);
            return productCardMolecule.renderComponentHTML();
        })
        .join('');
    }

    _renderContentHTML(products = []) {
        const content = document.querySelector(".all-products__content");
        content.innerHTML =
        `
            <h2 class="all-products font--h2"> ${products.length} resultados de productos</h2>
            <div class="all-products__cards">
                ${this._renderProductCardsHTML(products)}
            </div>
        `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    app.allProductsPage.registerClickEventOnFilters();
    app.allProductsPage.filterProducts();
});