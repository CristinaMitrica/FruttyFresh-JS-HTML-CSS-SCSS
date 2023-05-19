export default class CartCardComponent {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    renderHTML() {
        return `
        <div class="cart-card">
            <div class="cart-card__img-frame">
                <img class="cart-card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
            </div>
            <div class="cart-card__text">
                <h3>${this._name}</h3>
                <p>${this._price}€</p>
                <btn class="cart-card__btn btn--filled-brown">Añadir a la cesta</btn>
            </div>
        <div>
        `
    }
}