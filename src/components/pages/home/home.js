import CardComponent from '../../molecules/card/card.js';

export default class HomeComponent {
    constructor(
    ) {
        this._title = 'soy el titulo de la home';
    }

    renderHTML() {
        return `
            <header class="header">
                <a class="header__a" href="#">
                    <span class="header__logo icon--market" role="img" aria-label="Logo de FruttyFresh"></span>
                    <span class="hide-accesibility">Haz click para ir a la página de inicio</span>
                </a>
                <button class="header__btn btn--text" type="button">
                    <span class="header__icon-shopping icon--shopping-bag role="img" aria-label="Cesta Compra"></span>
                    <span class="hide-accesibility">Haz click para ver tu cesta de la compra</span>
                    Cesta (4)
                </button>
            </header>
                
            <main class="main">
            <div class="all-products">
                <h1>Todos los productos</h1>
                <div class="all-products__filters">
                    <btn class="chip--unselected">Verduras</btn>
                    <btn class="chip--unselected">Frutas</btn>
                    <btn class="chip--unselected">Zumos</btn>
                </div>
                <h2>6 resultados de productos</h2>
                <div class="all-products__cards">
                    <div class="all-products__card card">
                        <div class="card__img-frame">
                            <img class="card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                        </div>
                        <h3>Pera</h3>
                        <p>5€</p>
                        <btn class="card__btn btn--filled">Añadir a la cesta</btn>
                    </div>

                    <div class="all-products__card card">
                        <div class="card__img-frame">
                            <img class="card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                        </div>
                        <h3>Pera</h3>
                        <p>5€</p>
                        <btn class="card__btn btn--filled">Añadir a la cesta</btn>
                    </div>

                    <div class="all-products__card card">
                        <div class="card__img-frame">
                            <img class="card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                        </div>
                        <h3>Pera</h3>
                        <p>5€</p>
                        <btn class="card__btn btn--filled">Añadir a la cesta</btn>
                    </div>

                    <div class="all-products__card card">
                        <div class="card__img-frame">
                            <img class="card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                        </div>
                        <h3>Pera</h3>
                        <p>5€</p>
                        <btn class="card__btn btn--filled">Añadir a la cesta</btn>
                    </div>

                    <div class="all-products__card card">
                        <div class="card__img-frame">
                            <img class="card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                        </div>
                        <h3>Pera</h3>
                        <p>5€</p>
                        <btn class="card__btn btn--filled">Añadir a la cesta</btn>
                    </div>

                    <div class="all-products__card card">
                        <div class="card__img-frame">
                            <img class="card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                        </div>
                        <h3>Pera</h3>
                        <p>5€</p>
                        <btn class="card__btn btn--filled">Añadir a la cesta</btn>
                    </div>
                        
                </div>

                <!--<h1>${this._title}</h1>
                ${(new CardComponent).renderHTML()};-->
            </div>
        </main>

            <footer class="footer">
            </footer>
            
        `
    }
}