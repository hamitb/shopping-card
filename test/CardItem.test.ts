import CardItem from '../src/CardItem';
import Product from '../src/Product';
import Category from '../src/Category';

describe('card item', () => {
    test('should correctly initalize', () => {
        const category = new Category('Food');
        const apple = new Product('Apple', 5.0, category);
        const quantity = 37;

        const cardItem = new CardItem(apple, quantity);

        expect(cardItem.product).toBe(apple);
        expect(cardItem.quantity).toBe(quantity);
    });

    test('should use setters', () => {
        const category = new Category('Food');
        const apple = new Product('Apple', 5.0, category);
        const quantity = 37;

        const cardItem = new CardItem(apple, quantity);

        const orange = new Product('Orange', 10.0, category);
        const newQuantity = 73;

        cardItem.product = orange;
        cardItem.quantity = newQuantity;

        expect(cardItem.product).toBe(orange);
        expect(cardItem.quantity).toBe(newQuantity);
    })
});
