import Product from './Product';
import Category from './Category';

describe('product', () => {
    test('should correctly initalize', () => {
        const category = new Category('Food');
        const product = new Product('Apple', 100.0, category);

        expect(product.title).toBe('Apple');
        expect(product.price).toBeCloseTo(100.0);
        expect(product.category).toBe(category);
    });

    test('should use setters', () => {
        const foodCategory = new Category('Food');
        const computersCategory = new Category('Computers');
        const product = new Product('Apple', 100.0, foodCategory);
        
        product.title = 'MacBook Pro';
        product.price = 9000.0;
        product.category = computersCategory;

        expect(product.title).toBe('MacBook Pro');
        expect(product.price).toBeCloseTo(9000.0);
        expect(product.category).toBe(computersCategory);
    })
});
