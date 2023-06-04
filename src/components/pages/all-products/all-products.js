import ProductCardMolecule from '../../molecules/product-card/product-card.js';
import FiltersService from '../../../services/filters.js';

export default class AllProductsPage {
    products = [
        {name: 'Pera', price: 5, tipo: 'fruta'},
        {name: 'Manzana', price: 5, tipo: 'fruta'},
        {name: 'Sandia', price: 5, tipo: 'fruta'},
        {name: 'Zumo de Naranja', price: 5, tipo: 'zumo'},
        {name: 'Lechuga', price: 5, tipo: 'verdura'},
    ];

    constructor() {}

    _renderProductCardsHTML() {
        return this.products.map(product => {
            const productCard = new ProductCardMolecule(product);
            return productCard.renderHTML();
        }).join('');
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
                <h2 class="font--h2">6 resultados de productos</h2>
                <div class="all-products__cards">
                    ${this._renderProductCardsHTML()}
                </div>
            </div>
        `
    }
}

function initializeFilters(filtersService) {
    const handleFilterButtonClick = (event) => {
      filtersService.handleFilterButtonClick(event);
    };
    const filterButtons = document.querySelectorAll('.all-products__chip');
    filterButtons.forEach((filterButton) => {
        filterButton.addEventListener('click', handleFilterButtonClick);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeFilters(new FiltersService());
});