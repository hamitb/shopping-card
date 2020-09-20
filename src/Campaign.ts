import Category from "./Category";

export default class Campaign {
    private _active: boolean;
    private _category: Category;
    private _discountPerc: number;

    constructor(category: Category, discountPerc: number) {
        this._active = false;
        this._category = category;

        Campaign.checkValidDiscount(discountPerc);
        this._discountPerc = discountPerc;
    }

    private static checkValidDiscount(discount: number) {
        if (discount < 0 || discount > 100.0) {
            throw new RangeError('Discount can not be negative');
        }
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
        Campaign.checkValidDiscount(newDiscountPerc);
        this._discountPerc = newDiscountPerc;
    }

    get active(): boolean {
        return this._active;
    }

    set active(isActive: boolean) {
        this._active = isActive;
    }
}
