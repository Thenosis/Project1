import { LightningElement, wire, track, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import QUOTE from '@salesforce/schema/Quote__c'
import QUOTENAME from '@salesforce/schema/Quote__c.PersonName__c';
import ADDRESS from '@salesforce/schema/Quote__c.Address__c';
import PHONE from '@salesforce/schema/Quote__c.Phone__c';
import QUOTEREQUESTID from '@salesforce/schema/Quote__c.QuoteRequestId__c';
import EMAIL from '@salesforce/schema/Quote__c.PersonEmail__c';
import CAR from '@salesforce/schema/Quote__c.Car__c';
import test from '@salesforce/schema/task'

export default class Requestquota extends LightningElement {
    objectApiName = QUOTE;
    fields = [
        QUOTENAME,
        ADDRESS,
        PHONE,
        EMAIL,
        QUOTEREQUESTID,
        CAR
    ];
    handleSuccess(event){
        const env = new ShowToastEvent(
            {
                title: 'New Quote Created',
                message: 'Thank you for creating a new record',
                variant: 'success',
            }
        );
        this.dispatchEvent(env);
    }
    handleCancel(event) {}
    handleSubmit(event) {}

}