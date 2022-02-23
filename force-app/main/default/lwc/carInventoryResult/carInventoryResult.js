import { LightningElement, api } from "lwc";

export default class CarInventoryResult extends LightningElement {
  /* carTypeId supplied from the parent compnent */
  @api carTypeId;
}
