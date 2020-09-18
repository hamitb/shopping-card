export default class Coupon {
    private _discount: number;
    private _minCardAmount: number;
    private _used: boolean;

    constructor(discount: number, minCardAmount: number) {
        this._used = false;
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

    get used(): boolean {
        return this._used;
    }
}
