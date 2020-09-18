import CampaignManager from '../src/CampaignManager';
import Category from '../src/Category';
import Campaign from '../src/Campaign';

describe('campaign manager', () => {
    test('should be able to activate and get campaigns', () => {
        const category = new Category('Food');
        const campaign = new Campaign(category, 10.0);

        CampaignManager.activate(campaign);

        const gotCampaign = CampaignManager.getFor(category);

        expect(gotCampaign).toBe(campaign);
    });

    test('should return parent campaign', () => {
        const parentCategory = new Category('Cloths');
        const childCategory = new Category('Shirts', parentCategory);
        const campaign = new Campaign(parentCategory, 10.0);

        CampaignManager.activate(campaign);

        expect(CampaignManager.getFor(childCategory)).toBe(campaign);
    })

    test('should return nothing if no campaign exists', () => {
        const category = new Category('Toys');

        expect(CampaignManager.getFor(category)).toBeUndefined();
    })
});
