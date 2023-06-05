export default class CartService {
    _products = [];
    
    constructor() {};

    addProduct(product) {
        this._products = [...this._products, product];
    }

    removeProduct(id) {
        const productToRemoveIndex = this._products.findIndex(product => product.id === id);
        this._products.splice(productToRemoveIndex, 1);
    }

    purchaseCart() {
        this._clearProducts();
    }

    _clearProducts() {
        this._products = [];
    }
};