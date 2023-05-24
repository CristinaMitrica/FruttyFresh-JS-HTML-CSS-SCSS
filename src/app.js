import AllProductsPage from './components/pages/all-products/all-products.js';
import CartCheckoutPage from './components/pages/cart-checkout/cart-checkout.js';
import HeaderOrganism from './components/organisms/header/header.js';
import FooterOrganism from './components/organisms/footer/footer.js';

class App {
    constructor() {}

    _getActivePageHTML() {
        // cuando maquetemos la primera página recordar el concepto de
        // acoplamiento y pasarlo como paramétro del constructor y una función setter modificador
        const AllProductsPage = new AllProductsPage();
        const renderedPageHTML = AllProductsPage.renderHTML();
        return renderedPageHTML;
    }

    renderHTML() {
        const $body = document.querySelector("body");
        const html = `
            ${new HeaderOrganism().renderHTML()}
            <main>
                ${new AllProductsPage().renderHTML()}

                <!-- ${new CartCheckoutPage().renderHTML()} -->
            </main>
            ${new FooterOrganism().renderHTML()}
        `;

        $body.innerHTML = html;
    }
}

new App().renderHTML();