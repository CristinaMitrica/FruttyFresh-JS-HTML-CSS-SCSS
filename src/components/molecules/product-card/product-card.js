export default class ProductCardComponent {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    renderHTML() {
        return `
        <div class="product-card">
            <div class="product-card__img-frame">
                <img class="product-card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
            </div>
            <h3>${this._name}</h3>
            <p>${this._price}€</p>
            <btn class="product-card__btn btn--filled-brown">Añadir a la cesta</btn>
        <div>
        `
    }
}