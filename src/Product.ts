export default class Product {
    private _title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this._title = title;
        this._price = price;
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
        this._price = newPrice;
    }
}
