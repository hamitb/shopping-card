import Product from "./Product";

export default class CardItem {
    private _product: Product;
    private _quantity: number;

    constructor(product: Product, quantity: number) {
        this._product = product;

        CardItem.checkValidQuantity(quantity);
        this._quantity = quantity;
    }

    private static checkValidQuantity(quantity: number) {
        if (quantity < 0) {
            throw new RangeError('Quantity can not be negative');
        }
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
        CardItem.checkValidQuantity(newQuantity);
        this._quantity = newQuantity;
    }

    /**
     * Returns the given cardItem's total price.
     */
    public getPrice(): number {
        return this._product.salePrice * this._quantity;
    }
}
