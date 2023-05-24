import ProductCardMolecule from '../../molecules/product-card/product-card.js';

export default class AllProductsPage {
    constructor() {}

    renderHTML() {
        return `
            <div class="all-products">
                <h1>Todos los productos</h1>
                <div class="all-products__filters">
                    <btn class="chip--unselected">Verduras</btn>
                    <btn class="chip--unselected">Frutas</btn>
                    <btn class="chip--unselected">Zumos</btn>
                </div>
                <h2>6 resultados de productos</h2>
                <div class="all-products__cards">
                    ${new ProductCardMolecule({name: 'Pera', price: 5}).renderHTML()}
                </div>
            </div>
        `
    }
}