import CartCardMolecule from '../../molecules/cart-card/cart-card.js';

export default class CartCheckoutPage {
    constructor() {}

    renderHTML() {
        return `
            <div class="cart-checkout">
                <a class="cart-checkout__a link" href="#">
                    <span class="cart-checkout__icon-back icon--arrow-left" role="img" aria-label="Icono volver a 'Todos los Productos'"></span>
                    <span class="hide-accesibility">Haz click para ir a la página 'Todos los Productos'</span>
                    Volver a 'Todos los Productos'
                </a>
                <h1 class="font--h1">Cesta de la compra</h1>
                <h2 class="font--h2">4 productos en la cesta</h2>
                <div class="cart-checkout__content">
                    <form class="cart-checkout__form">
                        <p>7 productos seleccionados</p>
                        <h3 class="font--h3">Precio total 33€ (con IVA)</h3>
                        <div class="cart-checkout__input-field input-field">
                            <label class="input-field__label" for="email">Email</label>
                            <input class="input-field__input" id="email" type="email" placeholder="nombre@gmail.com" />
                        </div>
                        <button class="cart-checkout__btn btn--filled" type="submit">Comprar</button>
                    </form>
                    <div class="cart-checkout__cards">
                        ${new CartCardMolecule({name: 'Pera', price: 5}).renderHTML()}
                    </div>
                </div>
            </div>
        `
    }
}