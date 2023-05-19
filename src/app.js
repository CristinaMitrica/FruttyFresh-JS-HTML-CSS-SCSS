import AllProductsComponent from './components/pages/home/home.js';
import HeaderComponent from './components/organisms/header/header.js';
import FooterComponent from './components/organisms/footer/footer.js';

class App {
    constructor() {}

    _getActivePageHTML() {
        // cuando maquetemos la primera página recordar el concepto de
        // acoplamiento y pasarlo como paramétro del constructor y una función setter modificador
        const allProductsComponent = new AllProductsComponent();
        const renderedPageHTML = AllProductsComponent.renderHTML();
        return renderedPageHTML;
    }

    renderHTML() {
        const $body = document.querySelector("body");
        const html = `
            ${new HeaderComponent().renderHTML()}
            <main>
                ${new AllProductsComponent().renderHTML()}
            </main>
            ${new FooterComponent().renderHTML()}
        `;

        $body.innerHTML = html;
    }
}

new App().renderHTML();