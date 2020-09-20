import ShoppingCard from "./ShoppingCard";

export default class Delivery {
    private static readonly SINGLE_PACKAGE_COST: number = 10.0;
    private static readonly MAX_ITEM_PER_PACKAGE: number = 5;

    /**
     * Calculates the given shopping card's delivery cost.
     * @param shoppingCard
     */
    public static costOf(shoppingCard: ShoppingCard): number {
        if (shoppingCard.isEmpty()) {
            return 0.0;
        }

        let cost = 0.0;

        for (const item of shoppingCard.cardItems) {
            const quotient = Math.floor(item.quantity / Delivery.MAX_ITEM_PER_PACKAGE);
            const remainder = item.quantity % Delivery.MAX_ITEM_PER_PACKAGE;

            let packageCount = quotient;

            if (remainder) {
                packageCount++;
            }

            cost += Delivery.SINGLE_PACKAGE_COST * packageCount;
        }

        return cost;
    }
}
