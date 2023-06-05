export default class ProductCardMolecule {
    constructor({name, price}) {
        this._name = name;
        this._price = price;
    }

    renderComponentHTML() {
        return `
            <div class="product-card">
                <div class="product-card__img-frame">
                    <img class="product-card__img" src="assets/images/pera.jpg" alt="Producto pera imagen" loading="lazy">
                </div>
                <h3 class="font--h3">${this._name}</h3>
                <p>${this._price}€</p>
                <button class="product-card__btn btn--filled" type="button">Añadir a la cesta</button>
            <div>
        `
    }
}