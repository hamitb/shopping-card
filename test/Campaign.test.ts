import Campaign from '../src/Campaign';
import Category from '../src/Category';

describe('campaign', () => {
    test('should correctly initialize', () => {
        const category = new Category('Computers');
        const campaign = new Campaign(category, 10.0);

        expect(campaign.category).toBe(category);
        expect(campaign.discountPerc).toBeCloseTo(10.0);
        expect(campaign.active).toBeFalsy();
    });

    test('should use setters', () => {
        const campaign = new Campaign(new Category('Computers'), 10.0);
        const newCategory = new Category('Food');
        
        campaign.category = newCategory;
        campaign.discountPerc = 20.0;
        campaign.active = true;

        expect(campaign.category).toBe(newCategory);
        expect(campaign.discountPerc).toBeCloseTo(20.0);
        expect(campaign.active).toBeTruthy();
    });

    test('should throw error for non valid discounts', () => {
        const category = new Category('Foods');
        
        expect(() => new Campaign(category, -10.0)).toThrow(RangeError);
        expect(() => new Campaign(category, 120.0)).toThrow(RangeError);
    });
});
