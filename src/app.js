import AllProductsPage from './components/pages/all-products/all-products.js';
import CartCheckoutPage from './components/pages/cart-checkout/cart-checkout.js';
import HeaderOrganism from './components/organisms/header/header.js';
import FooterOrganism from './components/organisms/footer/footer.js';

class App {
    constructor() {}

    renderHTML() {
        const body = document.querySelector("body");
        const html = `
            ${new HeaderOrganism().renderHTML()}
            <main>
                ${new AllProductsPage().renderHTML()}
                <!--${new CartCheckoutPage().renderHTML()}-->
            </main>
            ${new FooterOrganism().renderHTML()}
        `;

        body.innerHTML = html;
    }
}

new App().renderHTML();