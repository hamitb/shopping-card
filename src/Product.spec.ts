import Product from './Product';

describe('product', () => {
    test('should correctly initalize', () => {
        const product = new Product('Apple', 100.0);

        expect(product.title).toBe('Apple');
        expect(product.price).toBeCloseTo(100.0);
    });

    test('should use setters', () => {
        const product = new Product('Apple', 100.0);

        product.title = 'Orange';
        product.price = 200.0;

        expect(product.title).toBe('Orange');
        expect(product.price).toBeCloseTo(200.0);
    })
});
