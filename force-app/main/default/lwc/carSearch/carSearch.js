import { LightningElement, track } from "lwc";

export default class CarSearch extends LightningElement {
  @track carTypeId;

  carTypeSelectHandler(e) {
    /* assign the carTypeId the value from detail
    created in our custom event 
    */
    this.carTypeId = e.detail;
  }
}
