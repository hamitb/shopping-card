import Product from "./Product";

export default class CardItem {
    private _product: Product;
    private _quantity: number;

    constructor(product: Product, quantity: number) {
        this._product = product;
        this._quantity = quantity;
    }

    get product(): Product {
        return this._product;
    }

    set product(newProduct: Product) {
        this._product = newProduct;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(newQuantity: number) {
        this._quantity = newQuantity;
    }
}
