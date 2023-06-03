export default class CartService {
    _products = [];
    
    constructor() {};

    addProduct(product) {
        this._products = [...this._products, product]
    }

    removeProduct(id) {
        const productToRemoveIndex = this._products.findIndex(product => product.id === id);
        let productsCopy = [...this._products];
        productsCopy.splice(productToRemoveIndex, 1);
        this._products = productsCopy;
    }

    buyCart() {}

    _clearProducts() {
        this._products = [];
    }
};