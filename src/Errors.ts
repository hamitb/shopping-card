export class UsedCouponError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = UsedCouponError.name;
    }
}

export class MinCardAmountError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = MinCardAmountError.name;
    }
}
