import Product from '../src/Product';
import Category from '../src/Category';
import CampaignManager from '../src/CampaignManager';
import Campaign from '../src/Campaign';

describe('product', () => {
    test('should correctly initalize', () => {
        const category = new Category('Food');
        const product = new Product('Apple', 100.0, category);

        expect(product.title).toBe('Apple');
        expect(product.originalPrice).toBeCloseTo(100.0);
        expect(product.category).toBe(category);
    });

    test('should use setters', () => {
        const foodCategory = new Category('Food');
        const computersCategory = new Category('Computers');
        const product = new Product('Apple', 100.0, foodCategory);
        
        product.title = 'MacBook Pro';
        product.originalPrice = 9000.0;
        product.category = computersCategory;

        expect(product.title).toBe('MacBook Pro');
        expect(product.originalPrice).toBeCloseTo(9000.0);
        expect(product.category).toBe(computersCategory);
    });

    test('should throw error with negative price', () => {
        expect(() => new Product('Apple', -100.0, new Category('Food'))).toThrow(RangeError);
    });

    test('should return discounted price if a campaign exists', () => {
        const category = new Category('Food');
        const product = new Product('Apple', 100.0, category);

        expect(product.salePrice).toBeCloseTo(100.0);

        CampaignManager.start(new Campaign(category, 25.0));

        expect(product.salePrice).toBeCloseTo(75.0);
    });
});
