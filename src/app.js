import HomeComponent from './components/pages/home/home.js';

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
        const activePageHTML = this._getActivePageHTML();
        const $body = document.querySelector("body");
        const html = `
          <div>
            <header></header>
                <main>
                    ${activePageHTML}
                </main>
            <footer></footer>
          </div>
        `;

        $body.innerHTML = html;
    }
}

new App().renderHTML();