import Category from "./Category";
import Campaign from "./Campaign";
import { Nullable } from "./Types";

export default class CampaignManager {
    private static campaigns: Map<Category, Campaign> = new Map();

    public static start(campaign: Campaign) {
        CampaignManager.campaigns.set(campaign.category, campaign);
        campaign.active = true;
    }

    public static finish(campaign: Campaign) {
        const category = campaign.category;
        const gotCampaign = CampaignManager.campaigns.get(category);

        if (gotCampaign == campaign) {
            CampaignManager.campaigns.delete(category);
            campaign.active = false;
        }
    }

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
