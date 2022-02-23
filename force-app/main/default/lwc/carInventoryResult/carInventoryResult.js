import { LightningElement, api } from "lwc";
import getInventory from "@salesforce/apex/CarInventoryResultController.getInventory";

export default class CarInventoryResult extends LightningElement {
  /* carTypeId supplied from the parent compnent */
  @api carTypeId;
  /*based on the carTypeId we'll make a call to the server
 to retrieve the cars asscoiated with the id */
}
