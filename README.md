# shopping-card

## Assumptions
* There were not too many details about the campaign discounts. Only given specification was "*Campaign discount vary based on the number of products in the card*". I have assumed that this means campaign discounts are based on the percentages like: *20% discount on Computers category*.

* Another topic which has not too many details was the delivery costs. Only given information was "*Delivery cost is dynamic, based on the number of deliveries and number of products*". Given that sentence I have assumed the followings: 
    * Each product is send separately by different sellers.
    * Each delivery package can carry up to 5 (I have randomly choosed a number that makes sense) items.
    * Delivery cost for each package is 10. (Again choosed a number that makes sense).

* Since there were no details about the persistence, I have didn't use any DB or something. Only stored information is list of active campaigns, which is stored in memory during the runtime by `CampaignManager` class.

## Running the tests
To run the tests:
* First run `npm install` command once.
* Then run `npm test` command.

## Test coverage
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |     100 |      100 |     100 |     100 |                   
 Campaign.ts        |     100 |      100 |     100 |     100 |                   
 CampaignManager.ts |     100 |      100 |     100 |     100 |                   
 CardItem.ts        |     100 |      100 |     100 |     100 |                   
 Category.ts        |     100 |      100 |     100 |     100 |                   
 Coupon.ts          |     100 |      100 |     100 |     100 |                   
 Delivery.ts        |     100 |      100 |     100 |     100 |                   
 Errors.ts          |     100 |      100 |     100 |     100 |                   
 Product.ts         |     100 |      100 |     100 |     100 |                   
 ShoppingCard.ts    |     100 |      100 |     100 |     100 |                   
