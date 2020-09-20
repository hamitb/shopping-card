import ShoppingCard from '../src/ShoppingCard';
import CardItem from '../src/CardItem';
import Product from '../src/Product';
import Category from '../src/Category';
import Coupon from '../src/Coupon';
import { UsedCouponError, MinCardAmountError } from '../src/Errors';
import Campaign from '../src/Campaign';
import CampaignManager from '../src/CampaignManager';

describe('shopping card', () => {
    describe('class ', () => {
        test('should correctly initalize', () => {
            const shoppingCard = new ShoppingCard();

            expect(shoppingCard.cardItems.length).toBe(0);
        });

        test('should support initial cardItems', () => {
            const category = new Category('Food');
            const product1 = new Product('Apple', 10.0, category);
            const product2 = new Product('Orange', 15.0, category);

            const cardItem1 = new CardItem(product1, 3);
            const cardItem2 = new CardItem(product2, 7);

            const shoppingCard = new ShoppingCard([cardItem1, cardItem2]);

            expect(shoppingCard.cardItems.length).toBe(2);
            expect(shoppingCard.cardItems[0]).toBe(cardItem1);
            expect(shoppingCard.cardItems[1]).toBe(cardItem2);
        });

        test('should use setters', () => {
            const category = new Category('Food');
            const product1 = new Product('Apple', 10.0, category);
            const product2 = new Product('Orange', 15.0, category);

            const cardItem1 = new CardItem(product1, 3);
            const cardItem2 = new CardItem(product2, 7);

            const shoppingCard = new ShoppingCard();

            shoppingCard.cardItems = [cardItem1, cardItem2];

            expect(shoppingCard.cardItems.length).toBe(2);
            expect(shoppingCard.cardItems[0]).toBe(cardItem1);
            expect(shoppingCard.cardItems[1]).toBe(cardItem2);
        });
    });

    describe('card items', () => {
        test('should be able to add get card items', () => {
            const shoppingCard = createNewCard();
            const allItems = shoppingCard.cardItems;

            expect(allItems.length).toBe(2);
            expect(allItems[0].product.title).toBe('Apple');
            expect(allItems[0].quantity).toBe(3);
            expect(allItems[1].product.title).toBe('Orange');
            expect(allItems[1].quantity).toBe(7);
        });

        test('should be able to remove card items', () => {
            const shoppingCard = createNewCard();
            const cardItems = shoppingCard.cardItems;
            const cardItem1 = cardItems[0];
            const cardItem2 = cardItems[1];

            shoppingCard.removeItem(cardItem1);

            const allItems = shoppingCard.cardItems;

            expect(allItems.length).toBe(1);
            expect(allItems[0]).toBe(cardItem2);
        });

        test('should do nothing when removing a non-existing item', () => {
            const shoppingCard = createNewCard();

            const category = new Category('Cloths');
            const product = new Product('Dress', 20.0, category);
            const cardItem = new CardItem(product, 10);

            shoppingCard.removeItem(cardItem);

            const allItems = shoppingCard.cardItems;

            expect(allItems.length).toBe(2);
        });

        test('should correctly calculate total card amount', () => {
            const shoppingCard = createNewCard();

            expect(shoppingCard.getTotalAmount()).toBeCloseTo(135.0);
        });
    });

    describe('coupons', () => {
        test('should be able to use coupons', () => {
            const shoppingCard = createNewCard();
            const coupon = new Coupon(10.0, 100.0);

            shoppingCard.useCoupon(coupon);

            expect(shoppingCard.getTotalAmount()).toBeCloseTo(125.0);
        });

        test('should be able to remove coupons', () => {
            const shoppingCard = createNewCard();
            const coupon = new Coupon(10.0, 100.0);

            shoppingCard.useCoupon(coupon);

            expect(coupon.used).toBeTruthy();
            expect(shoppingCard.getTotalAmount()).toBeCloseTo(125.0);

            shoppingCard.removeCoupon(coupon);

            expect(coupon.used).toBeFalsy();
            expect(shoppingCard.getTotalAmount()).toBeCloseTo(135.0);
        });

        test('should do nothing when removing a non-existing coupon', () => {
            const shoppingCard = createNewCard();
            const coupon = new Coupon(10.0, 100.0);

            shoppingCard.removeCoupon(coupon);

            expect(coupon.used).toBeFalsy();
            expect(shoppingCard.getTotalAmount()).toBeCloseTo(135.0);
        });

        test('should not use already used coupons', () => {
            const shoppingCard = createNewCard();
            const coupon = new Coupon(10.0, 100.0);

            coupon.used = true;

            expect(() => shoppingCard.useCoupon(coupon)).toThrow(UsedCouponError);
        });

        test('should not use a coupon if card amount is not enough', () => {
            const shoppingCard = createNewCard();
            const coupon = new Coupon(10.0, shoppingCard.getTotalAmount() * 2);

            expect(() => shoppingCard.useCoupon(coupon)).toThrow(MinCardAmountError);
        });

        test('should invalidate coupons when an item is deleted', () => {
            const shoppingCard = createNewCard();
            const coupon1 = new Coupon(10.0, 120.0);
            const coupon2 = new Coupon(5.0, 100.0);

            shoppingCard.useCoupon(coupon1);
            shoppingCard.useCoupon(coupon2);

            expect(shoppingCard.getTotalAmount()).toBeCloseTo(120.0);

            shoppingCard.removeItem(shoppingCard.cardItems[0]);

            expect(shoppingCard.getTotalAmount()).toBeCloseTo(100.0);

        });
    });

    describe('campaigns', () => {
        test('should apply campaigns', () => {
            const shoppingCard = createNewCard();
            const foodCategory = shoppingCard.cardItems[0].product.category;

            const campaign = new Campaign(foodCategory, 20.0);

            CampaignManager.start(campaign);

            expect(shoppingCard.getTotalAmount()).toBeCloseTo(108.0);
        });

        test('should apply parent category campaign', () => {
            const shoppingCard = createNewCard();
            const parentCategory = new Category('Clothes');
            const childCategory = new Category('Shirts', parentCategory);

            const product = new Product('White Shirt', 100.0, childCategory);

            shoppingCard.addItem(new CardItem(product, 2));

            CampaignManager.start(new Campaign(parentCategory, 25.0));

            expect(shoppingCard.getTotalAmount()).toBeCloseTo(285.0);
        });
    });
});

const createNewCard = function (): ShoppingCard {
    const shoppingCard = new ShoppingCard();

    const category = new Category('Food');
    const product1 = new Product('Apple', 10.0, category);
    const product2 = new Product('Orange', 15.0, category);

    const cardItem1 = new CardItem(product1, 3);
    const cardItem2 = new CardItem(product2, 7);

    shoppingCard.addItem(cardItem1);
    shoppingCard.addItem(cardItem2);

    return shoppingCard;
}
