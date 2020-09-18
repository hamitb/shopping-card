import Coupon from '../src/Coupon';

describe('coupon', () => {
    test('should correctly initialize', () => {
        const coupon = new Coupon(15.0, 150.0);

        expect(coupon.used).toBeFalsy()
        expect(coupon.discount).toBeCloseTo(15.0);
        expect(coupon.minCardAmount).toBeCloseTo(150.0);
    });

    test('should use setters', () => {
        const coupon = new Coupon(15.0, 150.0);

        coupon.discount = 25.0;
        coupon.minCardAmount = 250.0;

        expect(coupon.discount).toBeCloseTo(25.0);
        expect(coupon.minCardAmount).toBeCloseTo(250.0);
    });
});
