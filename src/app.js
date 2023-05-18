import HomeComponent from './components/pages/home/home.js';
import HeaderComponent from './components/organisms/header/header.js';

class App {
    constructor() {}

    _getActivePageHTML() {
        // cuando maquetemos la primera página recordar el concepto de
        // acoplamiento y pasarlo como paramétro del constructor y una función setter modificador
        const homeComponent = new HomeComponent();
        const renderedPageHTML = homeComponent.renderHTML();
        return renderedPageHTML;
    }

    renderHTML() {
        const $body = document.querySelector("body");
        const html = `
            ${new HeaderComponent().renderHTML()}
            <main>
                ${new HomeComponent().renderHTML()}
            </main>
            <footer></footer>
        `;

        $body.innerHTML = html;
    }
}

new App().renderHTML();