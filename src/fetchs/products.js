import productsMock from "../assets/mocks/products.js"

export default class ProductsFetch {
    constructor() {};

    getProducts() {
        return productsMock;
    }
};