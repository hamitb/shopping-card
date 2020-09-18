export default class Coupon {
    private _discount: number;
    private _minCardAmount: number;

    constructor(discount: number, minCardAmount: number) {
        this._discount = discount;
        this._minCardAmount = minCardAmount;
    }

    get discount(): number {
        return this._discount;
    }

    set discount(newDiscount: number) {
        this._discount = newDiscount;
    }

    get minCardAmount(): number {
        return this._minCardAmount;
    }

    set minCardAmount(newMinCardAmount: number) {
        this._minCardAmount = newMinCardAmount;
    }
}
