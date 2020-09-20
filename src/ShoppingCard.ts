import CardItem from "./CardItem";
import Coupon from "./Coupon";
import { UsedCouponError, MinCardAmountError } from "./Errors";
import CampaignManager from "./CampaignManager";

export default class ShoppingCard {
    private _cardItems: CardItem[];
    private _coupons: Coupon[];

    constructor(cardItems?: CardItem[]) {
        this._cardItems = [];
        this._coupons = [];

        if (cardItems) {
            this._cardItems = cardItems;
        }
    }

    get cardItems(): CardItem[] {
        return [...this._cardItems];
    }

    set cardItems(cardItems: CardItem[]) {
        this._cardItems = cardItems;
    }

    public addItem(item: CardItem): ShoppingCard {
        this._cardItems.push(item);

        return this;
    }

    public removeItem(item: CardItem): ShoppingCard {
        const index = this._cardItems.indexOf(item);
        if (index > -1) {
            this._cardItems.splice(index, 1);
        }

        this.unvalidateCoupons();

        return this;
    }

    public getTotalAmount(): number {
        let amount = this.getCardAmount();

        for (const coupon of this._coupons) {
            amount -= coupon.discount;
        }

        amount = Math.max(0.0, amount);

        return amount;
    }

    public useCoupon(coupon: Coupon): ShoppingCard {
        if (coupon.used) {
            throw new UsedCouponError('Coupon is already used');
        }

        if (this.getTotalAmount() < coupon.minCardAmount) {
            throw new MinCardAmountError('Card amount is not enough to use the coupon');
        }

        this._coupons.push(coupon);
        coupon.used = true;

        return this;
    }

    public removeCoupon(coupon: Coupon): ShoppingCard {
        const index = this._coupons.indexOf(coupon);

        if (index > -1) {
            const [removedCoupon] = this._coupons.splice(index, 1);
            removedCoupon.used = false;
        }

        return this;
    }

    private getCardAmount(): number {
        let amount = 0.0;

        for (const cardItem of this._cardItems) {
            const quantity = cardItem.quantity;
            const category = cardItem.product.category;
            const campaign = CampaignManager.getFor(category);

            let price = cardItem.product.price;

            if (campaign) {
                price *= (100.0 - campaign.discountPerc) / 100.0;
            }

            amount += price * quantity;
        }

        return amount;
    }

    private unvalidateCoupons() {
        let cardAmount = this.getCardAmount();
        const allCoupons = [...this._coupons];

        for (const coupon of allCoupons) {
            if (cardAmount < coupon.minCardAmount) {
                this.removeCoupon(coupon);
            } else {
                cardAmount -= coupon.discount;
            } 
        }
    }
}
