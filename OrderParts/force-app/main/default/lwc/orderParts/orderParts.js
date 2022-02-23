import { LightningElement, api } from 'lwc';

import PRODUCT_FIELD from '@salesforce/schema/OrderItem.Product2Id';
import QUANTITY_FIELD from '@salesforce/schema/OrderItem.Quantity';


export default class OrderParts extends LightningElement {
    @api OrderItem;

    fields = [PRODUCT_FIELD, QUANTITY_FIELD];
}