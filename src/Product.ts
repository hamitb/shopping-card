import Category from "./Category";
import CampaignManager from "./CampaignManager";

export default class Product {
    private _title: string;
    private _originalPrice: number;
    private _category: Category;

    constructor(title: string, price: number, category: Category) {
        this._title = title;
        this._category = category;
        
        Product.checkValidPrice(price);
        this._originalPrice = price;
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

    get salePrice(): number {
        const campaign = CampaignManager.getFor(this._category);

        if (campaign) {
            return campaign.getDiscounted(this._originalPrice);
        }

        return this._originalPrice;
    }

    get originalPrice(): number {
        return this._originalPrice;
    }
    
    set originalPrice(newPrice: number) {
        Product.checkValidPrice(newPrice);
        this._originalPrice = newPrice;
    }
    
    get category(): Category {
        return this._category;
    }
    
    set category(newCategory: Category) {
        this._category = newCategory;
    }
}
