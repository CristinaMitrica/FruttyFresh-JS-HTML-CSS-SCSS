export default class CartCardMolecule {
    constructor({name, price}) {
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
                <div>
                    <h3 class="font--h3">${this._name}</h3>
                    <p>${this._price}€</p>
                </div>
                <btn class="cart-card__btn btn--filled" type="button">Añadir a la cesta</btn>
            </div>
        <div>
        `
    }
}