import Category from "./Category";
import Campaign from "./Campaign";
import { Nullable } from "./Types";

export default class CampaignManager {
    private static campaigns: Map<Category, Campaign> = new Map();
    
    /**
     * Starts a campaign so that the products in
     * that specific category will be discounted.
     * @param campaign Campaign to start
     */
    public static start(campaign: Campaign) {
        CampaignManager.campaigns.set(campaign.category, campaign);
        campaign.active = true;
    }

    /**
     * Finishes the given campaign if it exists.
     * @param campaign Campaign to finish
     */
    public static finish(campaign: Campaign) {
        const category = campaign.category;
        const gotCampaign = CampaignManager.campaigns.get(category);

        if (gotCampaign == campaign) {
            CampaignManager.campaigns.delete(category);
            campaign.active = false;
        }
    }

    /**
     * Returns the campaign for the given category
     * if such campaign exists.
     * @param category Category to search for
     */
    public static getFor(category: Nullable<Category>): Nullable<Campaign> {
        if (category) {
            const campaignFound = CampaignManager.campaigns.get(category);
            
            if (campaignFound) {
                return campaignFound;
            }

            return CampaignManager.getFor(category.parent);
        }

        return undefined;
    }
}
