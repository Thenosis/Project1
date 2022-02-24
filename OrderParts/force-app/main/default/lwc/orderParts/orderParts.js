import { LightningElement, api, wire, track } from 'lwc';

import PARTS_ORDER from '@salesforce/schema/Parts_Order__c';
import CAR from '@salesforce/schema/Parts_Order__c.Car__c';
import CUSTOMER from '@salesforce/schema/Parts_Order__c.Customer__c';
import ORDER_DATE from '@salesforce/schema/Parts_Order__c.Order_Date__c.';
import PART from '@salesforce/schema/Parts_Order__c.Part__c';
import QUANTITY from '@salesforce/schema/Parts_Order__c.Quantity__c';


export default class OrderParts extends LightningElement {
    objectName= PARTS_ORDER;
    objectFields=[
        CUSTOMER,
        CAR,
        ORDER_DATE,
        PART,
        QUANTITY
    ];

    handleCancel(event){}
    handleSubmit(event){}
    handleSucess(event){}
    handleError(event){}
    

}