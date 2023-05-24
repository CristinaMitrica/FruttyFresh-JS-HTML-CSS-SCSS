import CartCardComponent from '../../molecules/cart-card/cart-card.js';

export default class CartCheckoutComponent {
    constructor() {}

    renderHTML() {
        return `
            <div class="cart-checkout">
                <a class="cart-checkout__a" href="#">
                    <span class="icon--arrow-left" role="img" aria-label="Icono volver a 'Todos los Productos'"></span>
                    <span class="hide-accesibility">Haz click para ir a la página 'Todos los Productos'</span>
                    Volver a 'Todos los Productos'
                </a>
                <h1>Cesta de la compra</h1>
                <h2>4 productos en la cesta</h2>
                <section class="cart-checkout__purchase-total">
                    <div class="cart-checkout__shopping-total">
                    <p>7 productos seleccionados</p>
                    <h3>Precio total 33€ (con IVA)</h3>
                    <form class="cart-checkout__form">
                        <label for="email">Email</label>
                        <input id="email"type="email" placeholder="nombre@gmail.com" />
                    </form>
                    <button class="btn--filled" type="button">Comprar</button>
                    </div>
                    <div class="cart-checkout__card">
                        ${new CartCardComponent('Pera', 5).renderHTML()}
                    </div>
                </section>
            </div>
        `
    }
}