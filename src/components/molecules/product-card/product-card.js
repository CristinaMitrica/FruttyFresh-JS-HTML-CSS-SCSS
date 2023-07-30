export default class ProductCardMolecule {
    constructor({name, price}) {
        this._name = name;
        this._price = price;
    }

    renderComponentHTML() {
        return `
            <article class="product-card">
                <div class="product-card__img-frame">
                    <img class="product-card__img" src="assets/images/${this._name}.jpg" alt="Producto ${this._name} imagen" loading="lazy">
                </div>
                <h3 class="font--h3">${this._name}</h3>
                <p>${this._price}€</p>
                <button class="product-card__btn btn--filled" type="button">Añadir a la cesta</button>
            </article>
        `
    }
}