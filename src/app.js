import HeaderOrganism from './components/organisms/header/header.js';
import FooterOrganism from './components/organisms/footer/footer.js';
import AllProductsPage from './components/pages/all-products/all-products.js';
import ProductsFetch from './fetchs/products.js';
import FiltersService from './services/filters.js';

class App {
    constructor() {
        this._allProductsPage = new AllProductsPage(
            new ProductsFetch(), 
            new FiltersService(),
        );
    }

    getAllProductsPage() {
        return this._allProductsPage;
    }

    renderComponentHTML() {
        const body = document.querySelector("body");
        const html = `
            ${new HeaderOrganism().renderComponentHTML()}
            <main>
                ${this._allProductsPage.renderComponentHTML()}
            </main>
            ${new FooterOrganism().renderComponentHTML()}
        `;
        body.innerHTML = html;
    }
}

const app = new App();
app.renderComponentHTML();

export default app;
