import Category from "./Category";
import Campaign from "./Campaign";
import { Nullable } from "./Types";

export default class CampaignManager {
    private static campaigns: Map<Category, Campaign> = new Map();

    public static activate(campaign: Campaign) {
        CampaignManager.campaigns.set(campaign.category, campaign);
        campaign.active = true;

        return campaign;
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
