export default class HeaderOrganism {
    constructor() {}

    renderHTML() {
        return `
            <header class="header">
                <a class="header__a-logo" href="#">
                    <span class="header__logo icon--market" role="img" aria-label="Logo de FruttyFresh"></span>
                    <span class="hide-accesibility">Haz click para ir a la página de inicio</span>
                </a>
                <button class="header__btn btn--text" type="button">
                    <span class="icon--shopping-bag role="img" aria-label="Cesta Compra"></span>
                    <span class="hide-accesibility">Haz click para ver tu cesta de la compra</span>
                    Cesta
                </button>
            </header>
        `
    }
}