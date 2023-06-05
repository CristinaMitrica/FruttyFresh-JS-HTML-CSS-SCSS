import HeaderOrganism from './components/organisms/header/header.js';
import AllProductsPage from './components/pages/all-products/all-products.js';
import FooterOrganism from './components/organisms/footer/footer.js';
import ProductsFetch from './fetchs/products.js';
import FiltersService from './services/filters.js';

class App {
    constructor() {
        this.allProductsPage = new AllProductsPage(
            new ProductsFetch(), 
            new FiltersService(),
        );
    }

    renderComponentHTML() {
        const body = document.querySelector("body");
        const html = `
            ${new HeaderOrganism().renderComponentHTML()}
            <main>
                ${this.allProductsPage.renderComponentHTML()}
            </main>
            ${new FooterOrganism().renderComponentHTML()}
        `;
        body.innerHTML = html;
    }
}

const app = new App();
app.renderComponentHTML();

export default app;