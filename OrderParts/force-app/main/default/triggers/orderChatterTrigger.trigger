trigger orderChatterTrigger on Parts_Order__c (after insert, after update) {
    
    //SOQL Variables
    List<FeedItem> FIList = new List<FeedItem>();
    Map<Id, Parts_Order__c> oldMap = trigger.oldMap;

    //for block to post to chatter
    for(Parts_Order__c parOrd: trigger.new) {
        FeedItem FI = new FeedItem();

        //if block to check that the Name field of the Part_Order__c object is not null 
        //so that a post is only created on parts orders that were successfully submitted.
        if(trigger.isInsert && parOrd.Name != null) {
            FI.Body = 'A new order does not have any parts! We need to order more parts!';

        //else-if to check if the order has been updated during a time when we don't
        //have parts to cover the order.
        } else if(trigger.isUpdate) {
            Parts_Order__c tempparOrd = oldMap.get(parOrd.Id);
            if(tempparOrd.Name != parOrd.name && parOrd.Name != null) {
                FI.Body = 'A new order does not have any parts! We need to order more parts!';
            }
        }
        
        FI.ParentId = parOrd.Id;
        if(String.isNotBlank(FI.Body)){
            FIList.add(FI);
        }
    }
    if(FIList.size() > 0) {
        insert FIList;
    }
}