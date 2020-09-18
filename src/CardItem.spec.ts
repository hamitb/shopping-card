import CardItem from './CardItem';
import Product from './Product';

describe('card item', () => {
    test('should correctly initalize', () => {
        const apple = new Product('Apple', 5.0);
        const quantity = 37;

        const cardItem = new CardItem(apple, quantity);

        expect(cardItem.product).toBe(apple);
        expect(cardItem.quantity).toBe(quantity);
    });

    test('should use setters', () => {
        const apple = new Product('Apple', 5.0);
        const quantity = 37;

        const cardItem = new CardItem(apple, quantity);

        const orange = new Product('Orange', 10.0);
        const newQuantity = 73;

        cardItem.product = orange;
        cardItem.quantity = newQuantity;

        expect(cardItem.product).toBe(orange);
        expect(cardItem.quantity).toBe(newQuantity);
    })
});
