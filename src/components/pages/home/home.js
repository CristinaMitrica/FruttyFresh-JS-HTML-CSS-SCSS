import CardComponent from '../../molecules/card/card.js';

export default class HomeComponent {
    constructor(
    ) {
        this._title = 'soy el titulo de la home';
    }

    renderHTML() {
        return `
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
            </div>
        `
    }
}