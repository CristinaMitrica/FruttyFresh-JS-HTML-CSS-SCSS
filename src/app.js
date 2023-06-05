import HeaderOrganism from './components/organisms/header/header.js';
import AllProductsPage from './components/pages/all-products/all-products.js';
import FooterOrganism from './components/organisms/footer/footer.js';
import ProductsFetch from './fetchs/products.js';

class App {
    constructor() {}

    renderHTML() {
        const body = document.querySelector("body");
        const html = `
            ${new HeaderOrganism().renderHTML()}
            <main>
                ${new AllProductsPage(new ProductsFetch()).renderHTML()}
            </main>
            ${new FooterOrganism().renderHTML()}
        `;
        body.innerHTML = html;
    }
}

new App().renderHTML();