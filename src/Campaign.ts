import Category from "./Category";

export default class Campaign {
    private _category: Category;
    private _discountPerc: number;

    constructor(category: Category, discountPerc: number) {
        this._category = category;
        this._discountPerc = discountPerc;
    }

    get category(): Category {
        return this._category;
    }

    set category(newCategory: Category) {
        this._category = newCategory;
    }

    get discountPerc(): number {
        return this._discountPerc;
    }

    set discountPerc(newDiscountPerc: number) {
        this._discountPerc = newDiscountPerc;
    }
}