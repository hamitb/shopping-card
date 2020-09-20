import Delivery from '../src/Delivery';
import ShoppingCard from '../src/ShoppingCard';
import Product from '../src/Product';
import Category from '../src/Category';
import CardItem from '../src/CardItem';

describe('delivery', () => {
    test('should return zero for empty card', () => {
        const shoppingCard = new ShoppingCard();

        expect(Delivery.costOf(shoppingCard)).toBe(0);
    });

    test('should calculate cost for a card correctly', () => {
        const product1 = new Product('Black Sneakers', 500.0, new Category('Shoes'));
        const product2 = new Product('MacBook', 15000.0, new Category('Computers'));

        const cardItem1 = new CardItem(product1, 13);
        const cardItem2 = new CardItem(product2, 5);

        const shoppingCard = new ShoppingCard([cardItem1, cardItem2]);

        expect(Delivery.costOf(shoppingCard)).toBeCloseTo(40.0);
    });
});
