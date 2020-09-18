import Category from "./Category";

export default class Product {
    private _title: string;
    private _price: number;
    private _category: Category;

    constructor(title: string, price: number, category: Category) {
        this._title = title;
        this._category = category;
        
        Product.checkValidPrice(price);
        this._price = price;
    }

    private static checkValidPrice(price: number) {
        if (price < 0) {
            throw new RangeError('Price can not be negative');
        }
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get price(): number {
        return this._price;
    }
    
    set price(newPrice: number) {
        Product.checkValidPrice(newPrice);
        this._price = newPrice;
    }
    
    get category(): Category {
        return this._category;
    }
    
    set category(newCategory: Category) {
        this._category = newCategory;
    }
}
