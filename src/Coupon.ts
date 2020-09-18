export default class Coupon {
    private _discount: number;
    private _minCardAmount: number;
    private _used: boolean;

    constructor(discount: number, minCardAmount: number) {
        this._used = false;
        this._minCardAmount = minCardAmount;

        Coupon.checkValidDiscount(discount);
        this._discount = discount;
    }

    private static checkValidDiscount(discount: number) {
        if (discount < 0) {
            throw new RangeError('Discount can not be negative');
        }
    }

    get discount(): number {
        return this._discount;
    }

    set discount(newDiscount: number) {
        Coupon.checkValidDiscount(newDiscount);
        this._discount = newDiscount;
    }

    get minCardAmount(): number {
        return this._minCardAmount;
    }

    set minCardAmount(newMinCardAmount: number) {
        this._minCardAmount = newMinCardAmount;
    }

    get used(): boolean {
        return this._used;
    }
}
