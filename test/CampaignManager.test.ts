import CampaignManager from '../src/CampaignManager';
import Category from '../src/Category';
import Campaign from '../src/Campaign';

describe('campaign manager', () => {
    test('should be able to start and get campaigns', () => {
        const category = new Category('Food');
        const campaign = new Campaign(category, 10.0);

        CampaignManager.start(campaign);

        const gotCampaign = CampaignManager.getFor(category);

        expect(gotCampaign).toBe(campaign);
    });

    test('should be able to finish a campaign', () => {
        const category = new Category('Food');
        const campaign = new Campaign(category, 10.0);

        CampaignManager.start(campaign);

        let gotCampaign: any = CampaignManager.getFor(category);

        expect(gotCampaign).toBe(campaign);
        expect(gotCampaign.active).toBeTruthy();

        CampaignManager.finish(campaign);

        gotCampaign = CampaignManager.getFor(category);

        expect(gotCampaign).toBeUndefined();
        expect(campaign.active).toBeFalsy();
    });

    test('should do nothing if campaign not exist while finishing', () => {
        const category = new Category('Food');
        const campaign1 = new Campaign(category, 10.0);
        const campaign2 = new Campaign(category, 20.0);

        CampaignManager.start(campaign1);
        CampaignManager.finish(campaign2);

        const gotCampaign: any = CampaignManager.getFor(category);

        expect(gotCampaign).toBe(campaign1);
        expect(gotCampaign.active).toBeTruthy();
    });

    test('should return parent category campaign', () => {
        const parentCategory = new Category('Cloths');
        const childCategory = new Category('Shirts', parentCategory);
        const campaign = new Campaign(parentCategory, 10.0);

        CampaignManager.start(campaign);

        expect(CampaignManager.getFor(childCategory)).toBe(campaign);
    })

    test('should return nothing if no campaign exists', () => {
        const category = new Category('Toys');

        expect(CampaignManager.getFor(category)).toBeUndefined();
    })
});
